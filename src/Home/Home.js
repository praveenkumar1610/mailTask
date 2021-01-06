import React from 'react'
import './home.css'

export default function Home() {
    return (
        <div>
            <div className="title">
                <h1>Login</h1>
            </div>
            <div className="form">
                <div className="label">
                    <label>Email</label><br/>
                    <input type="text"></input>
                </div>
                <div className="label">
                    <label>password</label><br/>
                    <input type="password"></input>
                </div>
                <button className="login">Login</button>
            </div>
        </div>
    )
}
