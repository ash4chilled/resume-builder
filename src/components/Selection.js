import React, { useState } from 'react'


export const Selection = ({optionsList, placeHolder, setDate, type, value, setColor}) => {

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
        style = {{backgroundColor : setColor}}
        className = 'p-2 my-3 ml-3 rounded-sm text-white outline-transparent'
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