import React, { useEffect } from 'react'
import Cards from './Cards'
import OrdersReport from './OrdersReport'
import OrdersByTaskReport from './OrdersByTaskReport'
import TimeLine from './TimeLine'
import ListContent  from './ProjectListContent'
import { Container } from 'components/shared'

const OrderDashboardBody = () => {

    const OrderReportData = {
        'categories':['Enero-2023','Febrero-2023','Marzo-2023','Abril-2023','Mayo-2023'],
        'series':[
            {
                'name':'Horas Facturables',
                'data': [25,20,30,10,30]
            },
            {
                'name':'Horas No Facturables',
                'data': [10,16,8,25,20]
            }
        ]
    }

    const OrderByTaskReportData = {
        'labels':['Reporte','PDF','Script'],
        'data':[10,20,40]
    }

    const DataTimeLine = [
        {
          "date": 1646554397,
          "events": [
            {
              "time": 1646554397,
              "action": "Parcel has been delivered",
              "recipient": "Lloyd Obrien"
            },
            {
              "time": 1646537537,
              "action": "Parcel is out for delivery"
            },
            {
              "time": 1646529317,
              "action": "Parcel has arrived at delivery station"
            }
          ]
        },
        {
          "date": 1646442017,
          "events": [
            {
              "time": 1646462597,
              "action": "Parcel has been picked up by courier"
            },
            {
              "time": 1646537537,
              "action": "Seller is preparing to ship your parcel"
            }
          ]
        },
        
      ]


    return (
        <>
            <Cards />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <OrdersReport data={OrderReportData} className="col-span-2" />
                <OrdersByTaskReport data={OrderByTaskReportData} />
               
            </div>
            <ListContent />
        </>
    )
}

export default OrderDashboardBody