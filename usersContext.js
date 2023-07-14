import {createContext, useEffect, useState} from 'react'

const userContext = createContext();

export const UsersProvider = ({children})=>
{
    let capsuleArr = [
        'I Want to switch to a business account',
        'Payments & Credit',
        'I\'m unable to add a new course ',
        'I arrived at the place after payment \n and the course was not in stock',
        'I Want to talk to a representative'
    ]
    
    
    const[historyConversation,setHistoryConversation] = useState(0)
    const[user,setUser] = useState('')
    const[allUsers,setAllUsers] = useState([]) 
    const[capsule,setCapsule] = useState(0)
    const[con,setCon] = useState([])
    const[history,setHistory] = useState([]);
    
    
    
    useEffect(()=>
    {
        getUsers()
    },[]);
    
    const getUsers = ()=>
    {
        fetch('https://randomuser.me/api/?results=10')
        .then((res)=>{return res.json()})
        .then((data)=>
        {
            setAllUsers([...allUsers,data.results])
        })
        .catch(error => {
            console.error(error);
          });
    }

    


    return (
    <userContext.Provider value={{ historyConversation,setHistoryConversation,history,setHistory, allUsers,setUser,user,capsule, capsuleArr, setCapsule , setCon,con}}>
        {children}
    </userContext.Provider>
    )
}

export default userContext