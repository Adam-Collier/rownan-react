import React from 'react'
import { useAppState } from '../../state-context'

import { AutoFillCategories } from '../Autofill'
import DragDrop from '../DragDrop'
import CategoryBlock from './CategoryBlock'

const Categories = props => {
  const { categories } = useAppState()

  return (
    <DragDrop stateItems={categories} id="categories">
      <section>
        <h3>Categories</h3>
        <AutoFillCategories />
      </section>
      {(block, index) => <CategoryBlock block={block} index={index} />}
    </DragDrop>
  )
}

export default Categories
