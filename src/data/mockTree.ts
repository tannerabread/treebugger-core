import { TreeNode } from './types'

export const mockTree: TreeNode = {
  id: '1',
  name: 'App',
  props: {},
  children: [
    {
      id: '2',
      name: 'Header',
      props: { title: 'Treebugger' },
      children: [],
    },
    {
      id: '3',
      name: 'Main',
      props: {},
      children: [
        {
          id: '4',
          name: 'SearchBar',
          props: { placeholder: 'Search...' },
          children: [],
        },
        {
          id: '5',
          name: 'Results',
          props: { items: 5 },
          children: [],
        },
      ],
    },
  ],
}
