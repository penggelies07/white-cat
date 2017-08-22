import * as PropTypes from 'prop-types'
import * as React from 'react'
import Base from '../../libs/Base'
import CheckBox from '../CheckBox'
import Icon from '../Icon'
import Node from './models/Node'

export interface ITreeNodeProps {
  node: Node,
  action?: React.ReactNode
}

export interface ITreeNodeState {}

export default class TreeNode extends Base<ITreeNodeProps, ITreeNodeState> {

  static contextTypes = {
    $tree: PropTypes.any
  }

  constructor (props: ITreeNodeProps) {
    super(props)
    this.state = {}
  }

  isChecked = () => {
    return this.context.$tree.isChecked(this.props.node)
  }

  onCheck = (e: any, value: boolean) => {
    this.context.$tree.onCheck(this.props.node)
  }

  onSelect = () => {
    const {node} = this.props
    node.store.select(node)
    this.context.$tree.onSelect(node)
  }

  onToggle = () => {
    if (this.props.node.isLeaf) {
      return
    }
    const {node} = this.props
    node.toggle()
  }

  onStopPropagation = (e: React.MouseEvent<any>) => {
    e.stopPropagation()
    e.nativeEvent.stopPropagation()
  }

  render (): JSX.Element {
    const {node, action} = this.props
    const {indent, checkable, action: actionFunc} = this.context.$tree.props
    const selected = node.store.selectedNode === node
    return (
      <div {...this.rootProps(['whc-tree__node', {selected}])}>
        <div className='whc-tree__node-head' style={{paddingLeft: indent * node.level + 'px'}} onClick={this.onSelect}>
          <span className='whc-tree__node-icon' onClick={this.onToggle}>
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
          {checkable && (
            <CheckBox className='whc-tree__node-check-box' checked={this.isChecked()} onChange={this.onCheck}/>
          )}
          <span className='whc-tree__node-label'>{node.label}</span>
          <span className='whc-tree__node-action' onClick={this.onStopPropagation}>{action}</span>
        </div>
        {node.expanded && (
          <div className='whc-tree__node-children'>
            {
              node.children && node.children.map((n: Node) => (
                <TreeNode key={n.key} node={n} action={actionFunc && actionFunc(n)}/>
              ))
            }
          </div>
        )}
      </div>
    )
  }
}
