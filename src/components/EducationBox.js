import React, {useState} from  'react'

import { InputBox } from './InputBox'

export const EducationBox = ({saveToAcademics, currentEducation}) =>{
    const initialState = {
        school : '',
        program : '',
        from : '',
        to : ''
    }

    const [saved, setSaved] = useState(false)
    const [bgSaveBtn, setBgSaveBtn] = useState('charcoal')
    const [education, setEducation] = useState(initialState)

    

    const addEducation =(obj)=>{
        switch(obj.type){
            case 'School' :
                setEducation(prev=> ({...prev, school : obj.value}))
                return
            case 'Program' :
                setEducation(prev=> ({...prev, program : obj.value}))
                return
            case 'from' : 
                setEducation(prev=> ({...prev, from : obj.value}))
                return
            case 'to' : 
                setEducation(prev=> ({...prev, to : obj.value}))
                return
            default : 
                setEducation(prev=> ({...prev}))
                return
        }
    }


    return(
    <div className='border-b-2 pb-2'>
         <div className='my-2 flex flex-col justify-center items-center'>
                    <InputBox 
                    placeHolder='School' 
                    boxWidth = 'w-9/12'
                    setString={addEducation}
                    textValue ={currentEducation.school} /> 
    
                    <InputBox 
                    placeHolder='Program' 
                    boxWidth = 'w-9/12'
                    setString={addEducation}
                    textValue ={currentEducation.program} />
                    
                    <div className='flex flex-col w-9/12'>
                    <div className='flex items-center justify-between'> 
                            <label>From</label> 
                            <InputBox 
                            placeHolder = 'from' 
                            type = 'date' 
                            setString={addEducation}
                            textValue ={currentEducation.from} />
                        </div>
                    <div className='flex items-center justify-between'> 
                            <label>To</label> 
                            <InputBox 
                            placeHolder= 'to' 
                            type = 'date' 
                            setString={addEducation}
                            textValue ={currentEducation.to} />
                        </div>
                    </div>
                </div>
        
        <div className='flex justify-end'>
            <button 
            className={`bg-${bgSaveBtn} text-white px-2 rounded-sm`}
            onClick={()=> saveToAcademics(education)} >
             save
            </button>
        </div>
    </div>
    )
}