import { useCallback, useContext, useEffect, useReducer } from "react";
import { createContext } from "react";


const Citycontext=createContext()
const intialstates={
    currentCity:{},
    city:[],
    isLoading:false,
    error:""
}
function reducer(state,action){
switch (action.type){

case 'loaded':{
    return {...state,isLoading:true}
}
case 'city/loaded':{
return {...state,city:action.payload,isLoading:false}
}
case 'current/loaded':{
    return {...state,currentCity:action.payload,isLoading:false}
}
case 'new/city':{
    return {...state,city:[...state.city,action.payload],isLoading:false}
}
case 'delete/city':{
    return {...state,isLoading:false,city:state.city.filter((el)=>el.id!==action.paylaod)}
}
case 'currentcity':{
    return {...state,currentCity:action.paylaod,isLoading:false}
}
default:{
    return 'The error occured'
}
}
}

function Cityproviser({children}){
    const [{currentCity,city,isLoading,error},dispatch]=useReducer(reducer,intialstates)


    useEffect(function(){
    async function cities(){

        const hi= await fetch(`http://localhost:800/cities`)
        const data= await hi.json()
        dispatch({type:'city/loaded',payload:data})
    }
    cities()
},[])

async function Newcity(newciy){
try{
    const hi=await fetch('http://localhost:800/cities',{
        method:'POST',
        body:JSON.stringify(newciy),
        headers:{
            'Content-Type':'application/json'
        }
    })
    const data=await hi.json()
dispatch({type:'new/city',payload:data})
}catch(err){
console.log(err)
}
}

const getCity=useCallback(async function getCity(id){
    const hi=await fetch(`http://localhost:800/cities/${id}`)
    const data=await hi.json()
    dispatch({type:'currentcity',paylaod:data})
},[])


    async function Delete(id){
            await fetch(`http://localhost:800/cities/${id}`,{
            method:'DELETE',
})
        dispatch({type:'delete/city',paylaod:id})
    }




//const currentcity=citi.filter((city)=>city.id)

    return <Citycontext.Provider value={{currentCity,city,isLoading,error,Newcity,Delete,getCity}}>{children}</Citycontext.Provider>
}

function Uppost(){
    const context=useContext(Citycontext)
    return context
}

export {Cityproviser,Uppost}