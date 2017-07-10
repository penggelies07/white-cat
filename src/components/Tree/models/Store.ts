import Node, {INode} from './Node'
import Tree from '../Tree'

export type loadFn = (node: Node) => Promise<INode[]>

export interface IStoreOptions {
  component: Tree,
  autoSelect?: boolean,
  load: loadFn
}

export default class Store {
  root: Node
  component: Tree
  load: loadFn
  selectedNode?: Node

  constructor (options: IStoreOptions) {
    this.load = options.load
    this.component = options.component

    this.root = new Node()
    this.root.store = this
    this.root.isRoot = true
    this.root.expanded = true
    this.load(this.root).then((children) => {
      const childNodes = this.root.createChildren(children)
      const node = childNodes[0]
      if (options.autoSelect && node) {
        this.select(node)
        this.component.onSelect(node)
      }
      this.component.refresh()
    })
  }

  select (node?: Node) {
    this.selectedNode = node
    this.component.refresh()
  }
}
