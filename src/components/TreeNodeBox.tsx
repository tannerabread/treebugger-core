import { JSX, useState } from 'react'
import { type TreeNode } from '@data/types'
import { getDepthColor } from '../data/depthColors'

interface TreeNodeBoxProps {
  /**
   * The TreeNode to be displayed.
   */
  node: TreeNode
  /**
   * Optional callback function to be called when a node is clicked.
   */
  onNodeClick?: (node: TreeNode) => void
  /**
   * Previous depth color percentage
   */
  previousDepth?: number
}

/**
 * TreeNodeBox component displays a box representation of a TreeNode.
 */
function TreeNodeBox ({ node, onNodeClick, previousDepth }: TreeNodeBoxProps): JSX.Element {
  const [expanded, setExpanded] = useState<boolean>(true)

  function handleNodeClick (): void {
    if (onNodeClick) {
      onNodeClick(node)
    }
    setExpanded(!expanded)
  }

  const backgroundColor = getDepthColor(previousDepth ?? 0)

  return (
    <div
      className='border p-4 m-2 relative rounded'
      style={{ backgroundColor: backgroundColor }}
    >
      <div className='font-bold cursor-pointer' onClick={handleNodeClick}>
        {node.name}
      </div>

      {expanded && node.children?.map(child => (
        <TreeNodeBox
          key={child.id}
          node={child}
          onNodeClick={onNodeClick}
          previousDepth={previousDepth ? previousDepth + 2 : 1}
        />
      ))}
    </div>
  )
}

export { TreeNodeBox }
