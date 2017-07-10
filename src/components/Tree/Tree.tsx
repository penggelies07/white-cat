import * as PropTypes from 'prop-types'
import * as React from 'react'
import Base from '../../libs/Base'
import Node from './models/Node'
import Store, {loadFn} from './models/Store'
import TreeNode from './TreeNode'
import './Tree.less'

interface ITreeProps {
  load: loadFn,
  indent?: number,
  autoSelect?: boolean,
  onSelect?: (node: Node) => void
}

interface ITreeState {
  store: Store,
  mounted: boolean
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
      mounted: false
    }
  }

  getChildContext = () => {
    return {
      tree: this
    }
  }

  componentDidMount () {
    this.setState({mounted: true})
  }

  onSelect = (node: Node) => {
    const onSelect = this.props.onSelect
    if (onSelect) {
      onSelect(node)
    }
  }

  refresh = () => {
    if (this.state.mounted) {
      this.setState({})
    }
  }

  render () {
    const {store} = this.state
    const {root} = store
    return (
      <div {...this.rootProps('Tree')}>
        {
          root.children && root.children.map((node: Node) => {
            return (
              <TreeNode key={node.key} node={node}/>
            )
          })
        }
      </div>
    )
  }
}
