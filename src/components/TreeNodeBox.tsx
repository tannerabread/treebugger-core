import { JSX, useState } from 'react'
import { TreeNode } from '@data/types'

interface TreeNodeBoxProps {
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
 * TreeNodeBox component displays a box representation of a TreeNode.
 */
function TreeNodeBox ({ node, onNodeClick }: TreeNodeBoxProps): JSX.Element {
  const [expanded, setExpanded] = useState(true)

  function handleNodeClick (): void {
    if (onNodeClick) {
      onNodeClick(node)
    }
    setExpanded(!expanded)
  }

  return (
    <div className='border p-4 m-2 relative rounded'>
      <div className='font-bold cursor-pointer' onClick={handleNodeClick}>
        {node.name}
      </div>

      {expanded && node.children?.map(child => (
        <TreeNodeBox
          key={child.id}
          node={child}
          onNodeClick={onNodeClick}
        />
      ))}
    </div>
  )
}

export { TreeNodeBox }
