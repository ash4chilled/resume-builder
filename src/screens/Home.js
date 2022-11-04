import React from 'react'

export const Home = () => {
    return(
        <main className = "">
            <div className='drop-shadow-md flex justify-center w-screen bg-charcoal text-white text-lg'>Resume Builder</div>
            
            <div className = "flex flex-col justify-center my-10 mx-10">
                <div className='flex justify-center text-white drop-shadow-md rounded-sm bg-darkGray'>Personal Details</div>

                <div className = "grid grid-cols-2 gap-5 py-5 px-5">
                    <input
                    className='border rounded-sm px-2' 
                    placeholder='First Name *' />

                    <input 
                    className='border rounded-sm px-2'
                    placeholder='Last Name *' />

                    <input 
                    className='border rounded-sm px-2'
                    placeholder='Email *' />

                    <input 
                    className='border rounded-sm px-2'
                    placeholder='Phone Number' />

                    <input 
                    className='border rounded-sm px-2'
                    placeholder='Web-Site' />

                    <input 
                    className='border rounded-sm px-2'
                    placeholder='GitHub' />
                </div>

                <div className="flex justify-between px-5">
                    <button className="bg-charcoal rounded-sm text-white px-5"> Back</button> 
                    <button className="bg-charcoal rounded-sm text-white px-5" >Next</button>
                </div>
            </div>       
        
        </main>
    )
}