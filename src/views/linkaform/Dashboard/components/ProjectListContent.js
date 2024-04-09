import React, { useEffect } from 'react'
import GridItem from './GridItem'

const ListContent = () => {
    const DataTimeline =[
        {
            "id": "27",
            "name": "Josue",
            "desc": "Porcentaje De cumplimiento",
            "attachmentCount": 12,
            "totalTask": 32,
            "completedTask": 27,
            "progression": 80,
            "dayleft": 21,
            "status": "none",
        },
        {
            "id": "28",
            "name": "Roman",
            "category": "Mobile Application",
            "desc": "Porcentaje De cumplimiento",
            "attachmentCount": 5,
            "totalTask": 36,
            "completedTask": 15,
            "progression": 45,
            "dayleft": 19,
            "status": "none",
        },
        {
            "id": "29",
            "name": "Misael",
            "category": "Web Backend Application",
            "desc": "Porcentaje De cumplimiento",
            "attachmentCount": 8,
            "totalTask": 27,
            "completedTask": 19,
            "progression": 73,
            "dayleft": 6,
            "status": "orange",
        },
        {
            "id": "31",
            "name": "Jose Pato",
            "category": "Backend Application",
            "desc": "Porcentaje De cumplimiento",
            "attachmentCount": 8,
            "totalTask": 78,
            "completedTask": 23,
            "progression": 21,
            "dayleft": 52,
            "status": "cyan",
        },
    ]

    return (
        <div className='h-full flex flex-col'>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {DataTimeline.map((DataTimeline) => (
                    <GridItem key={DataTimeline.id} data={DataTimeline} />
                ))}
            </div>
        </div>

    )
}

export default ListContent
