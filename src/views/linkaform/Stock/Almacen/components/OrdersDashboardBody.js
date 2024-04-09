import React, { useEffect } from 'react'
import { DoubleSidedImage } from 'components/shared'
import BlankView  from 'components/Linkaform/Objects/Blanks'
//-----Colums
import {columsDataFirstElement} from './dataColums'
//-----Components
import Table from 'components/Linkaform/Objects/Table'

const OrderDashboardBody = ({data}) => {
  ///--------ORDENAR DATA
  const firstElementData = () => {
    let arrayData = []
    if(data['firstElement'] !== undefined && data.firstElement ){
      arrayData = data.firstElement.tabledata;
    }
    console.log('arrayData',arrayData)
    return arrayData
  }

  if (data) {
      return (
        <div className="demo-card">
          <div ><h5 className="mb-2">Table</h5></div>
          <Table 
              dataTable={firstElementData}
              dataColums={columsDataFirstElement}
          />
        </div>
      )
    } else {
      return (
        <>
          <BlankView/>
        </>
      )
    }
 
}

export default OrderDashboardBody