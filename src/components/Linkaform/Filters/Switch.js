import React from 'react'
import { Switcher } from 'components/ui'
import { RiMoonClearLine, RiSunLine } from 'react-icons/ri'



const SwitcherCustom = ({labelCheck, labelUncheck, color, onchange}) => {
    return (
        <>
            <Switcher 
                checkedContent={labelCheck} 
                unCheckedContent={labelUncheck} 
                color={color}
                onchange={onchange}
            />
        </>
    )
}

export default SwitcherCustom