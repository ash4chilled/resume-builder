import React , {useState, useEffect} from 'react'
import {IoIosAddCircleOutline as AddButton} from 'react-icons/io'

import { EducationBox  } from '../../components/EducationBox'


export const Education = () =>{
    const initialState = {
        school : '',
        program : '',
        from : '',
        to : ''
    }
    const [education, setEducation] = useState(initialState) 
    const [academics, setAcademics] = useState([])
    const [educationBoxes, setEducationBoxes] = useState([])
    const [addIcon, setAddIcon] = useState("white")

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

    const saveToAcademics = () => {
        setAcademics(prev=> [...prev, education])
    }

    const addEducationBox = () =>{
        console.log("I m clicked")
        const i = Math.floor(Math.random() * 1000)
        setEducationBoxes(prev=> 
            [...prev, {
                        index : i, 
                        box : <EducationBox 
                                addEducation={addEducation} 
                                saveToAcademics = {saveToAcademics} />
                    }
           ])
    }

    useEffect(()=>{
        console.log("here in useeffect")
        if(educationBoxes.length === 0){   
           addEducationBox()
        }
    },[])



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
         
         {educationBoxes.map(eduBox=> <div key = {eduBox.index}>{eduBox.box}</div>)}
    </div>
    )
}