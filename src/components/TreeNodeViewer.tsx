import { useState } from 'react'
import { TreeNode } from '@data'

type TreeNodeViewerProps = {
  /**
   * The TreeNode to be displayed.
   */
  node: TreeNode
  /**
   * Optional callback function to be called when a node is clicked.
   */
  onNodeClick?: (node: TreeNode) => void
}

/**
 * TreeNodeViewer component displays a tree structure of nodes.
 * Each node can be expanded or collapsed to show/hide its children.
 * Clicking on a node triggers the onNodeClick callback with the clicked node.
 *
 * @param {TreeNode} node - The current node to display.
 * @param {(node: TreeNode) => void} [onNodeClick] - Optional callback for when a node is clicked.
 */
function TreeNodeViewer({ node, onNodeClick }: TreeNodeViewerProps) {
  const [expanded, setExpanded] = useState(true)

  function handleNodeClick (): void {
    if (onNodeClick) {
      onNodeClick(node)
    }
    setExpanded(!expanded)
  }

  return (
    <div style={{ marginLeft: '1rem', borderLeft: '1px solid gray', paddingLeft: '0.5rem' }}>
      <div onClick={handleNodeClick}>
        ▶️ {node.name} {node.props && `(${Object.keys(node.props).length} props)`}
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
