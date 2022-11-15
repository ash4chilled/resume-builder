import React, { useState } from 'react'

export const SkillSet = ({newSkill}) =>{

    const [text, setText] = useState("")
    const handleChange = (event) => {
        setText(event.target.value)
        newSkill({
            type : 'skillset',
            value  : event.target.value
        })
    }
    return(
        <textarea 
        value = {text}
        placeholder = 'description'
        onChange = {handleChange}
        className='border w-full rounded-sm px-2 my-3'/> 
    )
}