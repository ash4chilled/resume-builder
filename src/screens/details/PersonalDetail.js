import React , {useState, useContext, useEffect} from 'react'

import { InputBox } from '../../components/InputBox'
import { Subtitle } from '../../components/Subtitle'

import { PersonalConsumer } from '../../context/PersonalContext'

const placeHolders = [
    'First Name *',
    'Last Name *',
    'E-mail',
    'Phone Number',
    'Web-site',
    'GitHub'
]

export const PersonalDetail = () =>{

    const {credentials, addToCredentials} = useContext(PersonalConsumer)
    const [displayInputBoxes, setDisplayInputBoxes] = useState()

    const getCredentialValue = (str) => {
        switch(str){
            case 'First Name *' : 
                return credentials.fName
            case 'Last Name *' : 
                return credentials.lName
            case 'E-mail' : 
                return credentials.email
                
            case 'Phone Number' :
                return credentials.phone
        
            case 'Web-site' :
                return credentials.web
                
            case 'GitHub' :
                return credentials.gitHub
                
            default :
                return str  
        }
    }

    useEffect(()=>{
        setDisplayInputBoxes( 
            inputBoxes().map(
                element=> <div key = {element.key}>{element}</div>
            )
        )
    },[])

    const inputBoxes =()=> {
        let arrayOfInputBoxes = []

        for(let i = 0 ; i<placeHolders.length ; i++){
            arrayOfInputBoxes = [...arrayOfInputBoxes, 
                <InputBox 
                key = {i}
                placeHolder={placeHolders[i]} 
                setString = {addToCredentials} 
                textValue = {()=> getCredentialValue(placeHolders[i])} />
            ]
        }
        return arrayOfInputBoxes
    }


    return(
    <>
       <Subtitle 
       heading = "Personal Detail"
       setColor='#0F52BA' />

        <div className = "flex flex-wrap py-5 px-5 justify-center">
            {displayInputBoxes}
        </div>

    </>)
}