import { useState } from 'react'
import { TreeNode } from '@data'

type TreeNodeViewerProps = {
  /**
   * The TreeNode to be displayed.
   */
  node: TreeNode
}

/**
 * TreeNodeViewer component displays a tree structure of nodes.
 * Each node can be expanded or collapsed to show/hide its children.
 * Clicking on a node triggers the onNodeClick callback with the clicked node.
 *
 * @param {TreeNode} node - The current node to display.
 */
function TreeNodeViewer({ node }: TreeNodeViewerProps) {
  const [expanded, setExpanded] = useState(true)

  function handleNodeClick (): void {
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
        />
      ))}
    </div>
  )
}

export { TreeNodeViewer }
