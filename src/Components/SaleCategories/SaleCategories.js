import React from 'react'
import { useAppState } from '../../context/state-context'
import AutofillSaleCategories from '../Autofill/AutofillSaleCategories/index'

import DragDrop from '../DragDrop'
import SaleCategoryBlock from './SaleCategoryBlock'

const SaleCategories = props => {
  const { saleCategories } = useAppState()

  return (
    <DragDrop stateItems={saleCategories} id="saleCategories">
      <section>
        <h3>Sale Categories</h3>
        <AutofillSaleCategories />
      </section>
      {(block, index) => <SaleCategoryBlock block={block} index={index} />}
    </DragDrop>
  )
}

export default SaleCategories
