import React from 'react'
import { Card } from 'components/ui'
import ProgressionBar from './ProgressionBar'

const GridItem = ({ data }) => {
    const { name, totalTask, completedTask, progression, desc } = data

    return (
        <Card bodyClass="h-full">
            <div className="flex flex-col justify-between h-full">
                <div className="flex justify-between">
                    <h6>{name}</h6>
                </div>
                <p className="mt-4">{desc}</p>
                <div className="mt-3">
                    <ProgressionBar progression={progression} />
                    <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center rounded-full font-semibold text-xs">
                            <div className="flex items-center px-2 py-1 border border-gray-300 rounded-full">
                                <span className="ml-1 rtl:mr-1 whitespace-nowrap">
                                    {completedTask} / {totalTask} 
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default GridItem
