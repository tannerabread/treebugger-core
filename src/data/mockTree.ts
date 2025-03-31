import { TreeNode } from './types'

export const mockTree: TreeNode = {
  id: '1',
  name: 'App',
  props: {},
  children: [
    {
      id: '2',
      name: 'Header',
      props: { title: 'TreeBugger' },
      children: [],
    },
    {
      id: '3',
      name: 'Main',
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
          state: { loading: false },
          children: [],
        },
      ],
    },
  ],
}
