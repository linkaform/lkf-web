import React from 'react'
import { Select } from 'components/ui'


const SelectCustom = ({placeholder, options, size, typeCustom}) => {
    let typeSelect = typeCustom
    
    if (typeSelect == 'Multiple') {
        return ( 
            <Select
                placeholder={placeholder}
                options={options}
                size={size}
                isMulti
            ></Select>
        )
    }else{
        return ( 
            <Select
                placeholder={placeholder}
                options={options}
                size={size}
            ></Select>
        )
    }
}

export default SelectCustom