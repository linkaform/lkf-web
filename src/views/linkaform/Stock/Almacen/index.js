import React, { useState } from 'react'
import OrderDashboardBody from './components/OrdersDashboardBody'
import { runScript } from 'services/ReportsService'
import { Button, Input } from 'components/ui'
import { HiOutlineFilter, HiOutlineSearch } from 'react-icons/hi'
//---Import Filter
import Datetime from 'components/Linkaform/Filters/DatetimePicker'

const OrderDashboard = () => {
    //----State Datetime
    const [dateRange, setDateRange] = useState([
        new Date(),
        new Date(),
    ])
    const handleRangePickerChange = (date) => {
        console.log(date)
        setDateRange(date)
    }


    //----State Input
    const [value, setValue] = useState('')
    const handleChangeInput = (e) => {
        setValue(e.target.value)
        console.log(e.target.value)
    }


    //----Function Run
    const [data, setData] = useState('')


    //-----Function FIlter
    function handleChangeFilter(e){
        const request1 = runScript(94702)
        request1.then( result => {
            if (result.status == 200) {
                const responseQuery = result.data.response
                setData(responseQuery)
            } else {
                console.log('Error:',result.status);
            }
        })
       
    }

    return (
        <div className="flex flex-col gap-4 h-full">
                <div className="lg:flex items-center justify-between mb-4 gap-3">
                    <div className="mb-4 lg:mb-0">
                        <h3>Almacenes / Stock</h3>
                    </div>
                    <div className="flex flex-col lg:flex-row lg:items-center gap-3">
                        <Input
                            className="max-w-md md:w-100 md:mb-0 mb-4"
                            size="sm"
                            placeholder="Busqueda"
                            prefix={<HiOutlineSearch className="text-lg" />}
                            onChange={handleChangeInput}
                        />
                        <Datetime
                            placeholder ="Seleccione Fecha"
                            size="sm"
                            typeCustom="Range"
                            value={dateRange}
                            onChange={handleRangePickerChange}
                        />
                        <Button size="sm" icon={<HiOutlineFilter />} variant="solid" color="blue-600"  onClick={handleChangeFilter} >
                            Run 
                        </Button>
                    </div>
                </div>
            <OrderDashboardBody data={data}/>
        </div>
        
    )
}

export default OrderDashboard
