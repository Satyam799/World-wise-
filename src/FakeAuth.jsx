import { createContext, useContext, useReducer } from "react";

const context=createContext()
const FAKE_USER = {
    name: "Jack",
    email: "jack@example.com",
    password: "qwerty",
    avatar: "https://i.pravatar.cc/100?u=zz",
  };

const intialstate={user:null,isAuthenticated:false}

function reducer(state,action){
switch(action.type) {
case 'login':{
return {...state,isAuthenticated:true,user:action.payload}
}
case 'logout':{
    return {...state,isAuthenticated:false,user:null}
    }
default:throw new Error("Unknown action taken")
}
}


function Fakeauthconteext({children}){

const [{user,isAuthenticated},dispatch]=useReducer(reducer,intialstate)

function login(email,password){
    if(FAKE_USER.email===email || FAKE_USER.password===password)
  return  dispatch({type:'login',dispatch:true})
}
function logout(){
    return dispatch({type:'logout',dispatch:false})
}

    return <context.Provider value={{login,logout,user,isAuthenticated}}>{children}</context.Provider>
}

function Uppost(){
    const post=useContext(context)
    return post
}

export  {Uppost,Fakeauthconteext}