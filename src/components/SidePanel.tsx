import { JSX } from 'react'
import { TreeNode } from '@data/types'
import { PanelSection } from './PanelSection'

type SidePanelProps = {
  /**
   * The TreeNode to be displayed.
   */
  node: TreeNode
}

/**
 * SidePanel component displays detailed information about a selected TreeNode.
 * It shows the component name, its props, state, and children.
 * 
 * @param {TreeNode} node - The current node to display.
 * 
 * @returns {JSX.Element} The rendered SidePanel component.
 */
function SidePanel ({ node }: SidePanelProps): JSX.Element {
  return (
    <div className='bg-green-800 flex flex-col h-full p-4'>
      <h2 className='text-xl font-bold mb-4'>Component: {node.name}</h2>
      {/* maybe show key here in future to differentiate like components */}
      <div className='mb-4'>
        <PanelSection name='Props' entries={node.props} />
        <PanelSection name='State' entries={node.state} />
        <PanelSection name='Children' entries={node.children} />
      </div>
    </div>
  )
}

export { SidePanel }
