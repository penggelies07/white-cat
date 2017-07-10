import * as PropTypes from 'prop-types'
import * as React from 'react'
import Base from '../../libs/Base'
import Icon from '../Icon'
import Node from './models/Node'

interface ITreeNodeProps {
  node: Node
}

interface ITreeNodeState {}

export default class TreeNode extends Base<ITreeNodeProps, ITreeNodeState> {

  static contextTypes = {
    tree: PropTypes.any
  }

  constructor (props: ITreeNodeProps) {
    super(props)
    this.state = {}
  }

  onSelect = () => {
    const {node} = this.props
    node.store.select(node)
    this.context.tree.onSelect(node)
  }

  onToggle = () => {
    if (this.props.node.isLeaf) {
      return
    }
    const {node} = this.props
    node.toggle()
  }

  render (): JSX.Element {
    const {node} = this.props
    const indent = this.context.tree.props.indent
    const selected = node.store.selectedNode === node
    return (
      <div {...this.rootProps(['Tree__node', {selected}])}>
        <div className='Tree__nodeHead' style={{paddingLeft: indent * node.level + 'px'}} onClick={this.onSelect}>
          <span className='Tree__nodeIcon' onClick={this.onToggle}>
            {
              node.isLeaf
              ? <Icon name='circle-o' style={{opacity: 0.3}}/>
              : node.loading
              ? <Icon name='circle-o-notch' spinning/>
              : node.expanded
              ? <Icon name='chevron-down'/>
              : <Icon name='chevron-right'/>
            }
          </span>
          <span className='Tree__nodeLabel'>{node.label}</span>
        </div>
        {node.expanded && (
          <div className='Tree__nodeChildren'>
            {
              node.children && node.children.map((n: Node) => (
                <TreeNode key={n.key} node={n}/>
              ))
            }
          </div>
        )}
      </div>
    )
  }
}