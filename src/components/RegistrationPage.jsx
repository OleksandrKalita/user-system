import { useState } from "react";
import { useSignInUserMutation } from "../redux/usersApi";

export const RegistrationPage = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [signInUser, {isError}] = useSignInUserMutation();

    const submitHandler = async (event) => {
        event.preventDefault();

        await signInUser({email, name, password});

        setEmail("");
        setName("");
        setPassword("");
    }

    return (
        <div className="main">
            <div className="form-container">
                <form action="" className="form" onSubmit={event => submitHandler(event)}>
                    <div className="form-headline">Sign In</div>
                    <input 
                    type="text" 
                    placeholder="e-mail"
                    value={email}
                    onChange={event => setEmail(event.target.value)}/>
                    <input 
                    type="text" 
                    placeholder="name"
                    value={name}
                    onChange={event => setName(event.target.value)}/>
                    <input 
                    type="password" 
                    placeholder="password"
                    value={password}
                    onChange={event => setPassword(event.target.value)}/>
                    <button type="submit">submit</button>
                </form>
            </div>
        </div>
    );
}