import { useEffect, useState } from "react";
import styles from "./Login.module.css";
import Pagenav from "../components/Pagenav";
import { useNavigate } from "react-router-dom";
import { Uppost } from "../FakeAuth";

export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const {isAuthenticated,login}=Uppost()
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");

const navigate=useNavigate()

useEffect(function(){
  if(!isAuthenticated)return 
  navigate('/app',{replace:true})
},[isAuthenticated,navigate])

function handelsubmit(e){
  e.preventDefault()
  if(email!=='jack@example.com' || password!=='qwerty')return
  login(email,password)
}
  return (<>
    <main className={styles.login}>
    <Pagenav/>

      <form className={styles.form}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <button onClick={handelsubmit}>Login</button>
        </div>
      </form>
    </main>
    </>
  );
}
