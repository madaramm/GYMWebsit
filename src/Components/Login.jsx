import React, { useState } from 'react';


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

const userNmae = (e) => {
    setUsername(e.target.value);
};

const passWord = (e) => {
    setPassword(e.target.value);
};

const submit = (e) => {
    e.preventDefault();

    console.log('Login submitted with:', { username, password });

    setUsername('');
    setPassword('');
    };



    return (
    <div id='login'>
    <form onSubmit={submit}>
    <label>
        Username:
        <input type="text" value={username} onChange={userNmae} />
    </label>
    <label>
        Password:
        <input type="password" value={password} onChange={passWord} />
    </label>
    <button type="submit">Login</button>
            </form>
            </div>
);
};

export default Login;

