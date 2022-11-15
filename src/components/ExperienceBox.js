import React, {useState} from 'react'
import {IoIosAddCircleOutline as AddButton} from 'react-icons/io'

import { InputBox } from './InputBox'
import { Selection } from './Selection'
import { initialStateExperience, months, years } from '../util/states'
import { SkillSet } from './SkillSet'

export const ExperienceBox = () => {
    const [experience, setExperience] = useState(initialStateExperience)

    const addExperience = (obj) => {
        console.log("obj: ", obj)
        switch(obj.type){
            case 'Program' : 
                setExperience(prev => ({...prev, program : obj.value}))
                return
            case 'Company' : 
                setExperience(prev => ({...prev, company : obj.value}))
                return
            case 'from-month' : 
                setExperience(prev=> ({...prev, from :  {...prev.from, month : obj.value}}))
                return
            case 'from-year' : 
                setExperience(prev=> ({...prev, from : {...prev.month, year : obj.value}}))
                return
            case 'to-month' : 
                setExperience(prev=> ({...prev, to : {...prev.to, month : obj.value}}))
                return
            case 'to-year' : 
                setExperience(prev=> ({...prev, to : {...prev.to, year : obj.value}}))
            case 'skillset' : 
                setExperience(prev=> ({...prev, skillset : [...prev.skillset, obj.value]}))
                return
            default :
                setExperience(prev=> prev)
                return
        }
    }

    return(
    <div className = 'border-b pb-2'>
        <div className='flex flex-col items-center my-2'>
                <InputBox 
                placeHolder='Position'
                boxWidth = 'w-9/12'
                setString = {addExperience}
                textValue = {experience.program} />

                <InputBox 
                placeHolder='Company'
                boxWidth = 'w-9/12'
                setString = {addExperience}
                textValue = {addExperience.company} />

                <div className='flex flex-col w-9/12'>
                    <div className='flex items-center justify-between py-2 pl-2 border-b'>
                        <label className='text-burgandy'> From</label>
                        <div>
                            <Selection
                            optionsList={months}
                            placeHolder='Month'
                            setColor = '#800020'
                            type = 'from-month'
                            setDate = {addExperience}
                            value = {experience.from.month}  />

                            <Selection
                            optionsList={years}
                            placeHolder='Year'
                            setColor = '#800020' 
                            type = 'from-year'
                            setDate={addExperience}
                            value = {experience.from.year} />
                        </div>
                    </div>

                    <div className='flex items-center justify-between py-2 pl-2'>
                        <label className='text-burgandy'> To</label>
                        <div>
                            <Selection
                            optionsList={months}
                            placeHolder='Month'
                            setColor = '#800020'
                            type = 'to-month'
                            setDate={addExperience}
                            value = {experience.to.month} />

                            <Selection
                            optionsList={years}
                            placeHolder='Year'
                            setColor = '#800020'
                            type = 'to-year'
                            setDate = {addExperience}
                            value = {experience.to.year} />
                        </div>
                    </div>
                   
                </div>

                <div className = 'w-9/12'>
                    <div className = 'text-white bg-burgandy p-2 relative rounded-sm'>
                        Skills Acquired 
                        <AddButton className='ml-4 text-2xl cursor-pointer absolute right-2 top-2' /> 
                    </div>
                   
                    <SkillSet newSkill = {addExperience} /> 
                        
    
                   
                </div>

                
            </div> 

            <div className='flex justify-end'>
                    <button className = 'bg-burgandy text-white px-2 rounded-sm'>save</button>
            </div>
        </div>
    )
}