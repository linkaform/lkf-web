import React from 'react'
import { Card } from 'components/ui'
import { GrowShrinkTag } from 'components/shared'
import NumberFormat from 'react-number-format'
import { useSelector } from 'react-redux'
import dayjs from 'dayjs'


const StatisticCard = ({ data = {}, label, date, growShrink }) => {
    return (
        <Card>
            <h6 className="font-semibold mb-4 text-sm">{label}</h6>
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="font-bold">
                        <NumberFormat
                            displayType="text"
                            value={data}
                            thousandSeparator
                        />
                    </h3>
                    <p>
                        Al día de {' '}
                        <span className="font-semibold">
                            {dayjs(date).format('DD MMM')}
                        </span>
                    </p>
                </div>
                <GrowShrinkTag value={growShrink} suffix="%" />
            </div>
        </Card>
    )
}


const Cards = () => {
    const data = {
        'value_month': 2800,
        'value_week': 700,
        'value_day': 140,
        'growShrink_month':10,
        'growShrink_week':5,
        'growShrink_day':-1,
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <StatisticCard
                data={data.value_month}
                label="Horas Mes"
                tagSuffix="%"
                date='22 May'
                growShrink={data.growShrink_month}
            />
            <StatisticCard
                data={data.value_week}
                label="Horas Semana"
                tagSuffix="%"
                date='22 May'
                growShrink={data.growShrink_week}
            />
            <StatisticCard
                data={data.value_day}
                label="Horas Día"
                tagSuffix="%"
                date='22 May'
                growShrink={data.growShrink_day}
            />
        </div>
    )
}


export default Cards
