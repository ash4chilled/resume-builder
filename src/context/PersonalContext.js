
import React, { createContext, useState } from 'react'

import {initialState} from '../util/states'

const Context = createContext()

const PersonalContextProvider = ({children}) => {

    const [credentials, setCredentials] = useState(initialState)

    const addToCredentials = (obj) => {
        switch(obj.type){
            case 'First Name *' : 
                setCredentials(prev=> ({...prev, fName : obj.value }))
                return
            case 'Last Name *' : 
                setCredentials(prev=> ({...prev, lName : obj.value }))
                return
            case 'E-mail' :
                setCredentials(prev=> ({...prev, email : obj.value }))
                return
            case 'Phone Number' :
                setCredentials(prev=> ({...prev, phone : obj.value }))
                return
            case 'web' :
                setCredentials(prev=> ({...prev, web : obj.value }))
                return
            case 'GitHub' : 
                setCredentials(prev=> ({...prev, gitHub : obj.value }))
                return
            default :
                setCredentials(prev=> prev)
                return
        }
    }

    return(
        <Context.Provider value = {{
            credentials, 
            addToCredentials
        }} > {children} </Context.Provider>
    )
}

export {PersonalContextProvider, Context as PersonalConsumer}