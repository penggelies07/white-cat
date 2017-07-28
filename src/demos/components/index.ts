declare const require: any

const docs: any  = {}

const context = require.context('.', true, /\.tsx$/)
const list: string[] = context.keys()

const values = list.reduce((vals: any, path: string) => {
  const [name, demo] = path.split(/[./]/).filter(Boolean)

  if (!docs[name]) {
    try {
      const text: string = require(`!!raw-loader!./${name}/readme.md`)
      docs[name] = text.split(/^[-]{3,}/gm).map((t) => t.trim())
    } catch (error) {
      docs[name] = []
    }
  }

  const index = demo.replace(/[^\d]/g, '')
  const doc = docs[name] ? docs[name][index] : ''
  const raw: string = require(`!!raw-loader!./${name}/${demo}.tsx`)
  const component = require(`./${name}/${demo}.tsx`).default

  if (vals[name]) {
    vals[name].demos.push({name: demo, doc, raw, component})
  } else {
    vals[name] = {name, demos: [{name: demo, doc, raw, component}]}
  }

  return vals
}, {})

export interface IDemoItem {
  name: string,
  doc: string,
  raw: string,
  component: React.ComponentClass
}

export interface IComponentItem {
  name: string,
  demos: IDemoItem[]
}

const components: IComponentItem[] = []

for (var key in values) {
  components.push(values[key])
}

export default components
