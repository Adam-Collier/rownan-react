import React from 'react'
import { useAppState } from '../../context'
import AutoFillStaticBlock from '../Autofill/AutoFillStaticBlock/index'

import DragDrop from '../DragDrop'
import SaleCategoryBlock from './SaleCategoryBlock'

const SaleCategories = (props) => {
  const { saleCategories } = useAppState()

  return (
    <DragDrop stateItems={saleCategories} id="saleCategories">
      <section>
        <h3>Sale Categories</h3>
        <AutoFillStaticBlock
          blockName="saleCategories"
          selector=".categories-sale__grid a"
        />
      </section>
      {(block, index) => <SaleCategoryBlock block={block} index={index} />}
    </DragDrop>
  )
}

export default SaleCategories
