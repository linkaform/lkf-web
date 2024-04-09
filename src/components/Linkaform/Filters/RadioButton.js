import React from 'react'
import { Radio } from 'components/ui'

const RadioButtonCustom = ({data}) => {
    return (
        <>
            {data.map((options) => (
                <Radio className={options.className} name={options.name}>
                    {options.label}
                </Radio>
            ))}
        </>
    )
}

export default RadioButtonCustom