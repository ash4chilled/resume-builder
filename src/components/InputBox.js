import React, { useState} from 'react'

export const InputBox = ({
    placeHolder, 
    setString , 
    type = 'text', 
    boxWidth = 'w-56',
    textValue,
}) => {

    const [text, setText] = useState(textValue)

    const handleChange = (e) => {
        setText(e.target.value)
        setString({ 
            type : placeHolder,
            value : e.target.value})

    }

  



    return(
        <>
        <input
        className={`border rounded-sm px-2 py-1 m-2 ${boxWidth}`} 
        placeholder={placeHolder}
        onChange = {handleChange}
        value = {text}
        type = {type} />
      
        </>

    )
}