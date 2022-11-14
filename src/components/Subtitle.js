import React from 'react'


export const Subtitle = ({heading, setColor}) => {

    return(
    <div 
    style={{backgroundColor : setColor}}
    className='p-4 text-white text-xl flex justify-center drop-shadow-sm rounded-sm'>
       {heading}
    </div> 
    )
}