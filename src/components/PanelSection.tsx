import { JSX } from 'react'
import { TreeNode } from '@data'

type PanelSectionProps = {
  /**
   * The name of the section to be displayed.
   */
  name: string
  /**
   * The entries to be displayed in the section.
   */
  entries?: Record<string, any> | TreeNode[]
}

/**
 * PanelSection component displays a section of the side panel with a title and a list of entries.
 * It is used to show props, state, and children of a TreeNode.
 *
 * @param {string} name - The name of the section to display.
 * @param {Record<string, any> | TreeNode[]} [entries] - The entries to display in the section.
 *
 * @returns {JSX.Element} The rendered PanelSection component.
 */
function PanelSection ({ name, entries }: PanelSectionProps): JSX.Element {
  return (
    <>
      <h3 className='text-lg font-semibold'>{name}</h3>
      {entries && (
        <ul>
          {Object.entries(entries).map(([key, value]) => (
            <li key={key} className='mb-2'>
              <strong>{key}:</strong> {JSON.stringify(name == 'Children' ? value.name : value)}
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export { PanelSection }
