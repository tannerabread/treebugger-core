import { useState } from 'react'
import { TreeNodeViewer } from './components'
import { mockTree, TreeNode } from './data'
import './App.css'

function App () {
  const [activeNode, setActiveNode] = useState<TreeNode | null>(null)

  function handleSelectNode (node: TreeNode): void {
    if (activeNode) {
      activeNode.active = false
    }
    node.active = true
    setActiveNode(node)
  }

  return (
    <div style={{ padding: '1rem' }}>
      <h1>🌿 TreeBugger</h1>
      <h2>{activeNode?.name}</h2>
      <TreeNodeViewer
        node={mockTree}
        onNodeClick={handleSelectNode}
      />
    </div>
  )
}

export default App
