import { JSX, useState } from 'react'
import { SidePanel, TreeNodeBox } from './components'
import { mockTree, TreeNode } from './data'
import './App.css'

/**
 * App component serves as the main entry point for the TreeBugger application.
 * It initializes the state for the active node and handles node selection.
 * 
 * @returns {JSX.Element} The rendered App component.
 */
function App (): JSX.Element {
  const [activeNode, setActiveNode] = useState<TreeNode | null>(null)

  function handleSelectNode (node: TreeNode): void {
    if (activeNode) {
      activeNode.active = false
    }
    node.active = true
    setActiveNode(node)
  }

  return (
    <div className='p-4'>
      <h1 className='mb-6'>🌿 TreeBugger</h1>
      <div className='flex'>
        <TreeNodeBox node={mockTree} onNodeClick={handleSelectNode} />
        {activeNode && <SidePanel node={activeNode} />}
      </div>
    </div>
  )
}

export default App
