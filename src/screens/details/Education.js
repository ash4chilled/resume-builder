import React , {useState, useContext} from 'react'
import {IoIosAddCircleOutline as AddButton} from 'react-icons/io'

import { Subtitle } from '../../components/Subtitle'
import { EducationConsumer } from '../../context/EducationContext'


export const Education = () =>{
   
    const { addEducationBox, educationBoxes} = useContext(EducationConsumer)

    const [addIcon, setAddIcon] = useState("white")

    return(
    <div className='relative'>
        <Subtitle 
        heading = 'Education'
        setColor = '#008080' /> 

        <div className='top-3 right-2 absolute'>
            <AddButton
            color ={addIcon}
            className='text-4xl cursor-pointer'
            onClick={addEducationBox}
            onMouseOver = {()=> setAddIcon('#36454F') }
            onMouseLeave = {()=> setAddIcon("white")} />
        </div>
       
        { educationBoxes.map(eduBox=> <div key = {eduBox.index}>{eduBox.box}</div>)}

         {/* {academics.map(obj=> <div key = {obj.index}>{obj.education.school}</div> )} */}
    </div>
    )
}