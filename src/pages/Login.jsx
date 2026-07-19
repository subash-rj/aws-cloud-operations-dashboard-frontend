import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

    const[username, setUserName] = useState("");
    const[password, setPassword] = useState("");
    const navigate = useNavigate();

    function postLogin() {
        navigate("/dashboard");
    }

    return (
        <div>
            <h2>AWS Cloud Operations</h2>
            <input type="text"
                   placeholder="Username"
                   value={username}
                   onChange={(e) => setUserName(e.target.value)}/>
            <br /><br/>

            <input type="password"
                   placeholder="Password"
                   value={password}
                   onChange={(e) => setPassword(e.target.value)}/>

            <br/><br/>

            <button onClick={postLogin}>Login</button>
        </div>
    );

}

export default Login;