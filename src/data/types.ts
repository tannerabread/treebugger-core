export type TreeNode = {
  id: string
  name: string
  props?: Record<string, any>
  state?: Record<string, any>
  children?: TreeNode[]
}
