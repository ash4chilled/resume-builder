import React, {createContext, useEffect, useState} from 'react'

import { EducationBox } from '../components/EducationBox'

const Context = createContext()

const EducationContextProvider = ({children}) =>{
    const initialState = {
        school : '',
        program : '',
        from : {month : '' , year : ''},
        to : { month : '' , year : ''},
    }
   
    const [academics, setAcademics] = useState([])
    const [educationBoxes, setEducationBoxes] = useState([]) 
    const [eduIndex, setEduIndex] = useState(0)

    const addEducationBox = () =>{
        const i = Math.floor(Math.random() * 1000)
        setEducationBoxes(prev=> 
            [...prev, {
                        index : i,
                        box : <EducationBox 
                                saveToAcademics = {saveToAcademics}
                                currentEducation = {initialState} />
                    }
           ])
        
    }

  

    const saveToAcademics = (edu) => {
        setAcademics(prev=> [...prev, {index : eduIndex, education: edu}])
    }

    useEffect(()=>{
        addEducationBox()
    },[])

    useEffect(()=>{

        if(educationBoxes.length !== 0){
            setEducationBoxes(prev=> {
               prev[eduIndex] = {
                ...prev[eduIndex],
                box : <EducationBox 
                        setAcademics = {saveToAcademics} 
                        currentEducation = {academics[eduIndex].education} /> 
               }
                return prev
            })
            setEduIndex(prev=> prev + 1)
        }
       
    },[academics])

    return(
        <Context.Provider value = {{
            academics, setAcademics,
            addEducationBox,
            educationBoxes,
        }} >{children}</Context.Provider>
    )
}

export {EducationContextProvider, Context as EducationConsumer}