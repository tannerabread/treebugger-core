import { useState } from 'react'
import { TreeNodeViewer } from './components'
import { mockTree, TreeNode } from './data'
import './App.css'

function App () {
  const [activeNode, setActiveNode] = useState<TreeNode | null>(null)

  return (
    <div style={{ padding: '1rem' }}>
      <h1>🌿 Treebugger</h1>
      <h2>{activeNode?.name}</h2>
      <TreeNodeViewer
        node={mockTree}
        onNodeClick={setActiveNode}
      />
    </div>
  )
}

export default App
