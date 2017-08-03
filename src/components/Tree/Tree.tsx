import * as PropTypes from 'prop-types'
import * as React from 'react'
import Base from '../../libs/Base'
import Node from './models/Node'
import Store, {loadFn} from './models/Store'
import TreeNode from './TreeNode'
import './Tree.less'

interface ITreeProps {
  load: loadFn,
  action?: (node: Node) => React.ReactNode,
  checkable?: boolean,
  checkedKeys?: string[],
  autoSelect?: boolean,
  onSelect?: (node: Node) => void,
  onCheckedChange?: (keys: string[]) => void
}

interface ITreeState {
  store: Store,
  checkedKeys: string[]
}

export default class Tree extends Base<ITreeProps, ITreeState> {

  static Node = TreeNode

  static childContextTypes = {
    tree: PropTypes.any
  }

  static defaultProps = {
    indent: 30
  }

  constructor (props: ITreeProps) {
    super(props)
    this.state = {
      store: new Store({
        component: this,
        load: props.load,
        autoSelect: props.autoSelect
      }),
      checkedKeys: props.checkedKeys || []
    }
  }

  componentWillReceiveProps ({checkedKeys}: ITreeProps) {
    if (checkedKeys && checkedKeys !== this.state.checkedKeys) {
      this.setState({checkedKeys})
    }
  }

  getChildContext = () => {
    return {
      tree: this
    }
  }

  onSelect = (node: Node) => {
    const onSelect = this.props.onSelect
    if (onSelect) {
      onSelect(node)
    }
  }

  onCheck = (node: Node) => {
    const checkedKeys = this.state.checkedKeys
    const exist = !!checkedKeys.find((key) => key === node.key)
    const newKeys = exist ? checkedKeys.filter((key) => key !== node.key) : [...checkedKeys, node.key]
    if (!this.props.checkedKeys) {
      this.setState({checkedKeys: newKeys})
    }
    if (this.props.onCheckedChange) {
      this.props.onCheckedChange(newKeys)
    }
  }

  isChecked = (node: Node) => {
    return !!this.state.checkedKeys.find((key) => key === node.key)
  }

  refresh = () => {
    if (this._isMounted) {
      this.setState({})
    }
  }

  render () {
    const {action} = this.props
    const {store} = this.state
    const {root} = store
    return (
      <div {...this.rootProps('whc-tree')}>
        {
          root.children && root.children.map((node: Node) => {
            return (
              <TreeNode key={node.key} node={node} action={action && action(node)}/>
            )
          })
        }
      </div>
    )
  }
}
