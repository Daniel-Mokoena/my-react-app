import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth} from "../config/firebase";

export const Login = () =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const sigIn = async() =>{
        await createUserWithEmailAndPassword(auth, email, password);
    };
    return(
        <form>
            <input onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="UserId" />
            <input onChange={(e)=> setPassword(e.target.value)} type="Password" placeholder="Password"/>
            
            <button onClick={sigIn}>Login</button>
        </form>
    )
}