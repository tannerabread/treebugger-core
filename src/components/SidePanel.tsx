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
        <h3 className='text-lg font-semibold'>Props</h3>
        <ul>
          {node.props && Object.entries(node.props).map(([key, value]) => (
            <li key={key} className='mb-2'>
              <strong>{key}:</strong> {JSON.stringify(value)}
            </li>
          ))}
        </ul>
        <h3 className='text-lg font-semibold'>State</h3>
        <ul>
          {node.state && Object.entries(node.state).map(([key, value]) => (
            <li key={key} className='mb-2'>
              <strong>{key}:</strong> {JSON.stringify(value)}
            </li>
          ))}
        </ul>
        <h3 className='text-lg font-semibold'>Children</h3>
        <ul>
          {node.children && Object.entries(node.children).map(([key, value]) => (
            <li key={key} className='mb-2'>
              <strong>{key}:</strong> {JSON.stringify(value.name)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export { SidePanel }
