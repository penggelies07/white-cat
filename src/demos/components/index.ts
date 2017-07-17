declare const require: any

function getTitle (text: string) {
  const result = /export\sconst\stitle\s\=\s`([^`]*)`/gm.exec(text)
  return result ? result[1] : ''
}

function getDescription (text: string) {
  const result = /export\sconst\sdescription\s\=\s`([^`]*)`/gm.exec(text)
  return result ? result[1] : ''
}

const context = require.context('.', true, /.tsx$/)
const list: string[] = context.keys()

const values = list.reduce((vals: any, path: string) => {
  const [name, demo] = path.split(/[./]/).filter(Boolean)
  const text: any = require(`!!raw-loader!./${name}/${demo}`)

  const title = getTitle(text)
  const description = getDescription(text)
  const raw = text.replace(/^export\sconst\s(title|description)\s\=\s`[^`]*`\s*/gm, '')
  const component = require(`./${name}/${demo}`).default

  if (vals[name]) {
    vals[name].demos.push({name: demo, title, description, raw, component})
  } else {
    vals[name] = {name, demos: [{name: demo, title, description, raw, component}]}
  }

  return vals
}, {})

export interface IDemoItem {
  name: string,
  title: string,
  description: string,
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
