import { useNavigate } from "react-router-dom"
import { Uppost } from "../FakeAuth"
import { useEffect } from "react"

function ProtactAuth({children}) {
const {isAuthenticated}=Uppost()
const navigate=useNavigate()
useEffect(function(){
    if(!isAuthenticated)
    navigate('/')
},[isAuthenticated,navigate])

    return (
        isAuthenticated ?  children:null
    )
}

export default ProtactAuth
