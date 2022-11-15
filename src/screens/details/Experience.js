import React,  {useState} from 'react'
import {IoIosAddCircleOutline as AddButton} from 'react-icons/io'

import { InputBox } from '../../components/InputBox'
import { Subtitle } from '../../components/Subtitle'

import { months, years, initialStateExperience } from '../../util/states'
import { ExperienceBox } from '../../components/ExperienceBox'

export const Experience = ()=> {
    const [addIcon, setAddIcon] = useState('#ABB2B9')
    const [totalExperience, setTotalExperience] = useState([])
   

   

    return(
        <div>
            <div className='relative'>
                <Subtitle 
                heading = 'Experience'
                setColor='#800020' />
                <AddButton
                color ={addIcon}
                className='text-4xl cursor-pointer top-3 right-2 absolute'
                onMouseOver = {()=> setAddIcon('white') }
                onMouseLeave = {()=> setAddIcon("#ABB2B9")} />
            </div>
           <ExperienceBox />
           
        </div>
    )
}