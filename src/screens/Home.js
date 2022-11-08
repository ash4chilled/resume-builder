import React , {useState} from 'react'

import { PersonalDetail } from './details/PersonalDetail'
import { Education } from './details/Education';
import { PersonalContextProvider } from '../context/Personal';


export const Home = () => {
    const[idx, setIdx] = useState(0)

    const elements = [
        {
            index : 0,
            component : <PersonalDetail />,
        },
        {
            index : 1,
            component : <Education />,
         }
    ]
    return(
        <PersonalContextProvider>
        <main className = "">
            <div className='subpixel-antialiased py-5 text-2xl drop-shadow-md flex justify-center w-screen bg-charcoal text-white text-lg'>
                Resume Builder
            </div>
            
            <div className = "flex flex-col justify-center my-10 mx-10">
                {elements[idx].component}
        
                <div className="flex justify-between px-5 py-2">
                    <button 
                    className="bg-charcoal rounded-sm text-white px-5"
                    onClick= {()=> setIdx(prev=> prev-1)}> Back</button> 
                    <button 
                    className="bg-charcoal rounded-sm text-white px-5"
                    onClick={()=> setIdx(prev=> prev+ 1)} >Next</button>
                </div>
            </div>       
        </main>
        </PersonalContextProvider>
    )
}