import React from 'react'
import { DatePicker } from 'components/ui'

const { DatePickerRange } = DatePicker

const { DateTimepicker } = DatePicker


const DatetimePIckerCustom = ({placeholder, size, value, typeCustom, onChange}) => {
    let typeSelect = typeCustom
    
    if (typeSelect == 'Range') {
        return ( 
            <DatePickerRange
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                size={size}
            />
        )
    }else if(typeSelect == 'DateTime'){
        return ( 
            <DateTimepicker 
                placeholder={placeholder} 
                value={value}
                onChange={onChange}
                size={size}
            />
        )
    }else{
        return ( 
            <DatePicker 
                placeholder={placeholder} 
                value={value}
                onChange={onChange}
                size={size}
            />
        )
    }

    return <DatePicker placeholder={placeholder}/>
}

export default DatetimePIckerCustom