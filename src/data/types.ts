export type TreeNode = {
  /**
   * Unique identifier for the node.
   */
  id: string
  /**
   * Name of the node, typically the component name.
   */
  name: string
  /**
   * Optional properties associated with the node.
   */
  props?: Record<string, any>
  /**
   * Optional state associated with the node.
   */
  state?: Record<string, any>
  /**
   * Optional event handlers associated with the node.
   */
  children?: TreeNode[]
}
