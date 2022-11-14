import React, { useState } from 'react'


export const Selection = ({optionsList, placeHolder, setDate, type, value}) => {

    const [selectedValue, setSelectedValue] = useState(value)

    const handleChange = (event) => {
        setSelectedValue(event.target.value)
        setDate({
            type : type,
            value : event.target.value
        })
    }

    return(
        <select 
        className = 'p-2 ml-3 bg-green rounded-sm text-white outline-transparent'
        onChange = {handleChange}
        value = {selectedValue}  >
            <option value="" selected disabled hidden>{placeHolder}</option>
            {optionsList.map(option=> 
            <option 
            key ={option.value} >
                {option.label}
            </option>)}
        </select>

    )

}