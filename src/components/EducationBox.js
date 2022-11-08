import React, {useState} from  'react'

import { InputBox } from './InputBox'

export const EducationBox = ({addEducation, saveToAcademics}) =>{

    const [saved, setSaved] = useState(false)
    const [bgSaveBtn, setBgSaveBtn] = useState('charcoal')

    return(
    <div className='border-b-2 pb-2'>
        <div className='my-2 flex flex-col justify-center items-center'>
            <InputBox 
            placeHolder='School' 
            boxWidth = 'w-9/12'
            setString={addEducation} /> 
            <InputBox placeHolder='Program' boxWidth = 'w-9/12' setString={addEducation} />
            <div className='flex flex-col w-9/12'>
               <div className='flex items-center justify-between'> 
                    <label>From</label> 
                    <InputBox placeHolder = 'from' type = 'date' setString={addEducation}/>
                </div>
               <div className='flex items-center justify-between'> 
                    <label>To</label> 
                    <InputBox placeHolder= 'to' type = 'date' setString={addEducation}/>
                </div>
            </div>
        </div>
        <div className='flex justify-end'>
            <button 
            className={`bg-${bgSaveBtn} text-white px-2 rounded-sm`}
            onClick={saveToAcademics} >
             save
            </button>
        </div>
    </div>
    )
}