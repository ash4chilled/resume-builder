import React , {useState} from 'react'

import { PersonalDetail } from './details/PersonalDetail'
import { Education } from './details/Education';
import { PersonalContextProvider } from '../context/PersonalContext';
import { EducationContextProvider } from '../context/EducationContext';
import { Button } from '../components/Button';
import { Experience } from './details/Experience';


export const Home = () => {
    const[idx, setIdx] = useState(0)

    const components = [
        {
            index : 0,
            component : <PersonalDetail />,
        },
        {
            index : 1,
            component : <Education />,
         },
         {
            index : 2,
            component : <Experience /> 
         }
    ]

    const getComponent = (index) => {
        setIdx(prev=> {
            const current = prev + index
            return (current < 0  ||  current >= components.length ) 
                ? prev
                : current
        })
    }
    return(
        <PersonalContextProvider>
        <EducationContextProvider>
        <main className = "">
            <div className='subpixel-antialiased py-5 text-2xl drop-shadow-md flex justify-center w-screen bg-charcoal text-white text-lg'>
                Resume Builder
            </div>
            
            <div className = "flex flex-col justify-center my-10 mx-10">
                {components[idx].component}
        
                <div className="flex justify-between px-5 py-2">
                    <Button 
                    title = 'back' 
                    getComponent = {()=> getComponent(-1)} 
                    index = {idx}
                    componentsLength = {components.length} />
                    
                    <Button 
                    title = 'next' 
                    getComponent= {()=> getComponent(1)}
                    index = {idx}
                    componentsLength = {components.length} />
                </div>

            </div>       
        </main>
        </EducationContextProvider>
        </PersonalContextProvider>

    )
}