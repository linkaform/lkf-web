import React from 'react'
import { Card, Button } from 'components/ui'
import { Chart } from 'components/shared'


const OrdersReport = ({ className, data = {} }) => {
    return (
        <Card className={className}>
            <Chart
                series={data.series}
                xAxis={data.categories}
                height="380px"
                customOptions={{ legend: { show: true } }}
            />
        </Card>
    )
}

export default OrdersReport
