import React from 'react'
import { useAppState } from '../../context'

import AutoFillStaticBlock from '../Autofill/AutoFillStaticBlock'
import DragDrop from '../DragDrop'
import CategoryBlock from './CategoryBlock'

const Categories = (props) => {
  const { categories } = useAppState()

  return (
    <DragDrop stateItems={categories} id="categories">
      <section>
        <h3>Categories</h3>
        <AutoFillStaticBlock
          blockName="categories"
          selector=".category-tile__link"
        />
      </section>
      {(block, index) => <CategoryBlock block={block} index={index} />}
    </DragDrop>
  )
}

export default Categories
