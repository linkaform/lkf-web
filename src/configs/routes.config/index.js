import React from 'react'
import authRoute from './authRoute'

export const publicRoutes = [...authRoute]

export const protectedRoutes = [
    {
        key: 'home',
        path: '/home',
        component: React.lazy(() => import('views/linkaform/Dashboard/')),
        authority: [],
    },
    /*Ejemplo Real*/ 
    {
        key: 'stock.tissuecultureStock',
        path: '/Stock',
        component: React.lazy(() => import('views/linkaform/Stock/Almacen/')),
        authority: [],
    },
]
