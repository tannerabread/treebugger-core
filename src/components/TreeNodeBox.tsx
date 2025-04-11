import { JSX, useState } from 'react'
import { TreeNode } from '@data/types'

interface TreeNodeBoxProps {
  /**
   * The TreeNode to be displayed.
   */
  node: TreeNode
}

/**
 * TreeNodeBox component displays a box representation of a TreeNode.
 */
function TreeNodeBox ({ node }: TreeNodeBoxProps): JSX.Element {
  const [expanded, setExpanded] = useState(true)

  return (
    <div className='border p-2 m-2 relative rounded'>
      <div className='font-bold cursor-pointer' onClick={() => setExpanded(!expanded)}>
        {node.name}
      </div>

      {expanded && node.children?.map(child => (
        <TreeNodeBox
          key={child.id}
          node={child}
        />
      ))}
    </div>
  )
}

export { TreeNodeBox }
