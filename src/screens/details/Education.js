import React , {useState, useEffect, useContext} from 'react'
import {IoIosAddCircleOutline as AddButton} from 'react-icons/io'

import { EducationConsumer } from '../../context/EducationContext'


export const Education = () =>{
   
    const { addEducationBox, educationBoxes, academics} = useContext(EducationConsumer)

    const [addIcon, setAddIcon] = useState("white")

    return(
    <div>
        <div className='py-2 text-xl flex items-center text-white drop-shadow-sm rounded-sm bg-darkGray'>
           <div className = "flex grow justify-end">Education</div>  
           <div className='flex grow justify-end pr-2'>
                <AddButton
                color ={addIcon}
                className='text-4xl cursor-pointer'
                onClick={addEducationBox}
                onMouseOver = {()=> setAddIcon('#36454F') }
                onMouseLeave = {()=> setAddIcon("white")} />
        
           </div>
        </div>
         
         { educationBoxes.map(eduBox=> <div key = {eduBox.index}>{eduBox.box}</div>)}

         {academics.map(obj=> <div key = {obj.index}>{obj.education.school}</div> )}
       
       
    </div>
    )
}