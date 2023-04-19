import { useState } from "react";

export const Signup = () =>{
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [contact, setContact] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return(
        <form>
            <input value={name} type="text" placeholder="Name" id="name"/>
            <input value={surname} type="text" placeholder="Surname" id="surname"/>
            <input value={contact} type="number" placeholder="Contact" id="contact"/>
            <input value={email} type="email" placeholder="UserId" id="email"/>
            <input value={password} type="Password" placeholder="Password" id="password"/>
            <button type="submit" >Login</button>
        </form>
    )
}