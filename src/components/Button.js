import React, { useEffect, useState } from 'react'

export const Button = ({title, getComponent, index, componentsLength}) => {
    const [background, setBackground] = useState('charcoal')
    
    useEffect(()=>{

        let currentBg = ''
        if(title === 'back' && index <=0){
            currentBg = 'darkGray'
        }else if(title === 'next' && index === componentsLength-1){
            currentBg = 'darkGray'
        }else currentBg = 'charcoal'
        
        setBackground(currentBg)
    },[index])
    return(
        <button 
        className={`bg-${background} rounded-sm text-white px-5`}
        onClick= {getComponent} >
            {title}
        </button>
    )
}
