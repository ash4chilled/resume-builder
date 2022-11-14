import React, { useEffect, useState } from 'react'

export const Button = ({title, getComponent, index, componentsLength}) => {
    const [bgColor, setBgColor] = useState('#36454F')
    
    useEffect(()=>{

        let currentBg = ''
        if(title === 'back' && index <=0){
            currentBg = '#ABB2B9'
        }else if(title === 'next' && index === componentsLength-1){
            currentBg = '#ABB2B9'
        }else currentBg = '#36454F'
        
        setBgColor(currentBg)
    },[index])
    return(
        <button 
        style = {{backgroundColor : bgColor }}
        className='rounded-sm text-white px-5'
        onClick= {getComponent} >
            {title}
        </button>
    )
}
