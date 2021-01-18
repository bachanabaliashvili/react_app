import React,{ useState } from 'react';
import { useHistory } from 'react-router-dom';
import UserList from '../config/userList';

const Login = (props) => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();

    function handleSubmit(event) {
        event.preventDefault();

        if (UserList.hasOwnProperty(user)) {
            if (UserList[user].password === password) {
                props.cb(true, user);
                history.push('/userPage');
            } else {
                alert("Wrong password")
            }
        } else {
            alert("Unknown User")
        }
    }

    return <div className="login">
        <h1 className="login-title">შესვლა</h1>
        <div className="main-login">
            <div className="inner-login">
                <label className="inner-login-title"><b>მომხმარებლის სახელი</b></label>
                <input className="inner-login-input" type="text" value={user} onChange={(e) => setUser(e.target.value)} />
            </div>
            <div className="inner-login">
                <label className="inner-login-title"><b>პაროლი</b></label>
                <input className="inner-login-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="inner-login">
                <button className="login-button" onClick={handleSubmit}>შესვლა</button>
            </div>
        </div>
    </div>
}

export default Login;