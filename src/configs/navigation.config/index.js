import {
    NAV_ITEM_TYPE_TITLE,
    NAV_ITEM_TYPE_COLLAPSE,
    NAV_ITEM_TYPE_ITEM,
} from 'constants/navigation.constant'

const navigationConfig = [
    {
        key: 'home',
        path: '/dashboard',
        title: 'Home',
        icon: 'home',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'stock',
        path: '',
        title: 'Almacenes',
        icon: 'collapseMenu',
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [],
        subMenu: [

            {
                key: 'stock.tissuecultureStock',
                path: '/Stock ',
                title: 'Stock',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                subMenu: [],
            },
        ],
    },

    /*EJEMPLO DE ESTRCUTURA DE 3 NIVELES
        {
            key: 'groupMenu',
            path: '',
            title: 'Nivel 1',
            icon: '',
            type: NAV_ITEM_TYPE_TITLE,
            authority: [],
            subMenu: [
                {
                    key: 'groupMenu.collapse',
                    path: '',
                    title: 'Nivel 2',
                    icon: 'groupCollapseMenu',
                    type: NAV_ITEM_TYPE_COLLAPSE,
                    authority: [],
                    subMenu: [
                        {
                            key: 'groupMenu.collapse.item1',
                            path: '/group-collapse-menu-item-view-1',
                            title: 'Nivel 3',
                            icon: '',
                            type: NAV_ITEM_TYPE_ITEM,
                            authority: [],
                            subMenu: [],
                        },
                    ],
                },
            ],
        },
    */ 

]

export default navigationConfig
