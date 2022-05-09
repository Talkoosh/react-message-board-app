import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userService } from '../services/userService';


export function Login() {
    const [username, setUsername] = useState('');
    const [imgURL, setImgURL] = useState('');
    const navigate = useNavigate();

    function handleInput({ target }) {
        switch (target.name) {
            case 'username':
                setUsername(target.value)
                break;
            default:
                setImgURL(target.value)
        }
    }

    async function doLogin(ev) {
        ev.preventDefault();
        await userService.login(username, imgURL)
        navigate('/')
    }

    return (
        <form className="login-form">
            <input required placeholder="username" type="text" name="username" onChange={(ev) => handleInput(ev)} value={username} />
            <input required placeholder="profile pic" type="text" name="imgURL" onChange={(ev) => handleInput(ev)} value={imgURL} />
            <button onClick={(ev) => doLogin(ev)}>Login</button>
        </form>
    )
}
