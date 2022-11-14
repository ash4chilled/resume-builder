import React, {useState} from  'react'

import { InputBox } from './InputBox'
import { Selection } from './Selection'
import {months, years} from '../util/states'

export const EducationBox = ({saveToAcademics, currentEducation}) =>{
    const initialState = {
        school : '',
        program : '',
        from : { month : '' , year : ''},
        to : { month : '' , year : ''},
    }

    const [saved, setSaved] = useState(false)
    const [education, setEducation] = useState(initialState)
    const [comment, setComment] = useState(null)

    

    const addEducation =(obj)=>{
        switch(obj.type){
            case 'School' :
                setEducation(prev=> ({...prev, school : obj.value}))
                return
            case 'Program' :
                setEducation(prev=> ({...prev, program : obj.value}))
                return
            case 'from-month' : 
                setEducation(prev=> ({...prev, from : {...prev.from, month : obj.value}}))
                return
            case 'from-year' : 
                setEducation(prev=> ({...prev, from : {...prev.from, year : obj.value}}))
                return
            case 'to-month' : 
                setEducation(prev=> ({...prev, to : {...prev.to, month : obj.value}}))
                return
            case 'to-year' : 
                setEducation(prev=> ({...prev,to : {...prev.to, year : obj.value} }))
                return
            default : 
                setEducation(prev=> ({...prev}))
                return
        }
    }

    const validateInputs = () => {
        if( education.school === "" || 
            education.program === "" || 
            education.from === "" ||
            education.to === "" ){
                setComment("One or more fields are Empty")
            }
        else{
            saveToAcademics(education)
            setComment("Education saved")
            setSaved(true)
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
                    
                    <div className='flex flex-col w-9/12 '>
                        <div className='flex items-center justify-between py-2 pl-2 border-b-2'> 
                                <label className='text-darkGray'>From</label> 
                                <div className='flex'>
                                    <Selection 
                                    setColor = '#008080'
                                    placeHolder= "Month" 
                                    optionsList = {months}
                                    setDate = {addEducation}
                                    type = 'from-month'
                                    value = {currentEducation.from.month} /> 

                                    <Selection 
                                    setColor = '#008080'
                                    placeHolder = "Year" 
                                    optionsList = {years}
                                    setDate = {addEducation}
                                    type = 'from-year'
                                    value = {currentEducation.from.year} /> 
                                </div>
                            
                        </div>
                        <div className='flex items-center justify-between py-2 pl-2'> 
                                <label className='text-darkGray'>To</label> 
                                <div className='flex'>
                                    <Selection
                                    setColor = '#008080' 
                                    placeHolder= "Month" 
                                    optionsList = {months}
                                    setDate = {addEducation}
                                    type = 'to-month'
                                    value ={currentEducation.to.month}  /> 

                                    <Selection 
                                    setColor = '#008080'
                                    placeHolder = "Year" 
                                    optionsList = {years}
                                    setDate = {addEducation}
                                    type = 'to-year' 
                                    value = {currentEducation.to.year} /> 
                                </div>
                                
                        </div>
                    </div>
                </div>
        
        <div className='flex justify-end items-center'>
            <div className={`text-${saved ? 'green-500' : 'red-500'} text-sm px-5`} >
                {comment}</div>
            <button 
            className={`bg-green text-white px-2 rounded-sm`}
            onClick={()=> validateInputs()} >
             save
            </button>
        </div>
    </div>
    )
}