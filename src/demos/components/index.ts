declare const require: any

export interface IExample {
  title: string,
  description: string,
  raw?: string,
  component?: React.ComponentClass
}

export interface IGroup {
  title: string,
  description: string,
  examples: IExample[]
}

export interface IDemo {
  title: string,
  groups: IGroup[]
}

export interface IDemoMap {
  [name: string]: IDemo
}

const context = require.context('.', true, /\.md$/)

const componentMap: IDemoMap = context.keys().reduce((map: IDemoMap, mdPath: string) => {
  try {
    const [name, groupName] = mdPath.split(/[./]/).filter(Boolean)
    const mdContent = require(`./${name}/${groupName}.md`)

    let demo: IDemo = map[name]

    if (!demo) {
      demo = map[name] = {title: name, groups: []}
    }

    const group = {title: groupName, description: '', examples: []}

    group.examples = mdContent
      .split(/^[-]{5,}\s?/gm)
      .reduce((examples: IExample[], segment: string, i: number) => {
        if (i === 0) {
          group.description = segment
          return examples
        }

        const [lineOne, ...lines] = segment.trim().split('\n')
        const title = lineOne.trim()
        const description = lines.join('\n').trim()

        if (!title) {
          return examples
        }

        let raw: string | undefined
        let component: React.ComponentClass | undefined

        try {
          raw = require(`!!raw-loader!./${name}/${title}.tsx`)
          component = require(`./${name}/${title}.tsx`).default
        } catch (error) {
          console.warn(error.message)
        }
        
        examples.push({
          title,
          description,
          raw,
          component
        })

        return examples
      }, [])

    if (name === groupName) {
      demo.groups = [group, ...demo.groups]
    } else {
      demo.groups.push(group)
    }

  } catch (error) {
    console.warn(error.message)
  }
  return map
}, {})

const components: IDemo[] = []

for (const name in componentMap) {
  components.push(componentMap[name])
}

export default components
