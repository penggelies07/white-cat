import Store from './Store'

export interface INode {
  key?: string,
  label?: string,
  value?: any,
  children?: Node[]
}

let nodeIdSeed = 0

export default class Node implements INode {
  key: string
  label?: string
  value?: any
  parent?: Node
  children?: Node[]

  isRoot?: boolean
  store: Store
  level: number
  expanded: boolean
  isLeaf: boolean
  shouldLoad: boolean
  loading: boolean

  constructor ({key, label, value, children}: INode = {}) {
    this.key = key === undefined ? '' + nodeIdSeed++ : key
    this.label = label
    this.value = value
    this.children = children

    this.level = -1
    this.expanded = false
    this.isLeaf = false
    this.shouldLoad = true
    this.loading = false
  }

  createChildren (children: INode[]): Node[] {
    this.isLeaf = !children.length
    this.children = []
    return children.map(item => {
      return this.insertChild(item)
    })
  }

  insertChild (child: INode | Node, index?: number): Node {
    const childNode = child instanceof Node
      ? child
      : new Node(child)

    childNode.parent = this
    childNode.store = this.store
    childNode.level = this.level + 1
    const children = this.children = (this.children || []) as Node[]

    if (index === undefined || index < -1) {
      children.push(childNode)
    } else {
      children.splice(index, 0, childNode)
    }

    return childNode
  }

  expand () {
    if (this.loading) {
      return
    }
    if (this.shouldLoad) {
      this.loading = true
      this.store.load(this).then((children) => {
        this.createChildren(children)
        this.shouldLoad = false
        this.loading = false
        this.store.component.refresh()
      })
    }
    this.expanded = true
    this.store.component.refresh()
  }

  collapse () {
    if (this.loading) {
      return
    }
    this.expanded = false
    this.store.component.refresh()
  }

  toggle () {
    if (this.expanded) {
      this.collapse()
    } else {
      this.expand()
    }
  }
}
