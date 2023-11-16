import { Link } from "react-router-dom";
import { useState } from "react";
import { useLogInUserMutation } from "../redux/usersApi";
import { login } from "../redux/userSlice";
import { useDispatch } from "react-redux";

export const LoginPage = () => {
    const [email, setEmail] = useState("sasha@gmail.com");
    const [password, setPassword] = useState("1111");
    const [logInUser, {data, isSuccess}] = useLogInUserMutation();
    const dispatch = useDispatch();

    const submitHandler = async (event) => {
        event.preventDefault();

        await logInUser({email, password});
    }

    if (isSuccess) {
        dispatch(login(data.user));
        localStorage.setItem("token", data.token);
    }
    return (
        <div className="main">
            <div className="form-container">
                <form action="" className="form" onSubmit={event => submitHandler(event)}>
                    <div className="form-headline">Login</div>
                    <input 
                    type="text" 
                    placeholder="e-mail"
                    value={email}
                    onChange={event => setEmail(event.target.value)}/>
                    <input 
                    type="password" 
                    placeholder="password"
                    value={password}
                    onChange={event => setPassword(event.target.value)}/>
                    <Link to={"/registration"} className="form-link">If you don't have accoount, click here</Link>
                    <button>submit</button>
                </form>
            </div>
        </div>
    );
}