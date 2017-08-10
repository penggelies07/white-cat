declare const require: any

export interface IExample {
  name: string,
  doc: string,
  raw?: string,
  component?: React.ComponentClass
}

export interface IDemo {
  name: string,
  doc: string,
  examples: IExample[]
}

const context = require.context('.', true, /\.md$/)

const components: IDemo[] = context.keys().reduce((_c: IDemo[], mdPath: string) => {
  try {
    const [name] = mdPath.split(/[./]/).filter(Boolean)
    const mdContent = require(`./${name}/readme.md`)

    const demo: IDemo = {
      name,
      doc: '',
      examples: []
    }
    
    demo.examples = mdContent
      .split(/^[-]{5,}\s?/gm)
      .reduce((examples: IExample[], segment: string, i: number) => {
        if (i === 0) {
          demo.doc = ''
          return examples
        }

        const [lineOne, ...lines] = segment.trim().split('\n')
        const title = lineOne.trim()
        const content = lines.join('\n').trim()

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
          name: title,
          doc: content,
          raw,
          component
        })

        return examples
      }, [])

    _c.push(demo)

  } catch (error) {
    console.warn(error.message)
  }
  return _c
}, [])

export default components
