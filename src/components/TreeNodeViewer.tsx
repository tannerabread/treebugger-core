import { JSX, useState } from 'react'
import { TreeNode } from '@data'
import clsx from 'clsx'

type TreeNodeViewerProps = {
  /**
   * The TreeNode to be displayed.
   */
  node: TreeNode
  /**
   * Optional callback function to be called when a node is clicked.
   */
  onNodeClick?: (node: TreeNode) => void
  /**
   * Optional class name to apply to the component.
   */
  className?: string
}

/**
 * TreeNodeViewer component displays a tree structure of nodes.
 * Each node can be expanded or collapsed to show/hide its children.
 * Clicking on a node triggers the onNodeClick callback with the clicked node.
 *
 * @param {TreeNode} node - The current node to display.
 * @param {(node: TreeNode) => void} [onNodeClick] - Optional callback for when a node is clicked.
 * @param {string} [className] - Optional class name for styling.
 * 
 * @returns {JSX.Element} The rendered TreeNodeViewer component.
 */
function TreeNodeViewer({ node, onNodeClick, className }: TreeNodeViewerProps): JSX.Element {
  const [expanded, setExpanded] = useState(true)

  function handleNodeClick (): void {
    if (onNodeClick) {
      onNodeClick(node)
    }
  }

  function handleExpand (): void {
    setExpanded(!expanded)
  }

  return (
    <div className={clsx('ml-4 pl-2', className)}>
      <div className='flex flex-row'>
        <div className='mr-4' onClick={handleExpand}>▶️ </div>
        <div className={clsx('mb-4', node.active && 'font-bold text-green-300')} onClick={handleNodeClick}>
          {node.name} {node.props && `(${Object.keys(node.props).length} props)`}
        </div>
      </div>

      {expanded && node.children?.map(child => (
        <TreeNodeViewer
          key={child.id}
          node={child}
          onNodeClick={onNodeClick}
        />
      ))}
    </div>
  )
}

export { TreeNodeViewer }
