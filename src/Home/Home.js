import React,{useState} from 'react'
import './home.css'
import Input from '../components/input'
import {useHistory} from 'react-router-dom'


export default function Home() {
    const [value,setValue]=useState("");
    const history=useHistory();


    const handleSubmit=()=>{
       history.push(`/signin/${value}`)
    }

    return (
        <div>
            <div className="title">
                <h1>Login</h1>
            </div>
            <div className="form">
                <div className="label">
                    <label>UserName</label><br/>
                    <Input type="text" value={value} placeholder="Enter the UserName" onChange={(e)=>setValue(e.target.value)}/>
                </div>
                <button className="login" onClick={handleSubmit}>Login</button>
            </div>
        </div>
    )
}
