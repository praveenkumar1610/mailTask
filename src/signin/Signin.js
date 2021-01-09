import React,{useEffect,useState} from 'react';
import Repo from '../repo/Repo';
import './signin.css'

export default function Signin(props) {
    const [user,setUser]=useState({})
    const [open,isOpen]=useState(false)
    useEffect(()=>{
        fetch(`https://api.github.com/users/${props.match.params.id}`).then(res=>res.json()).then(data=>{
            setUser(data)
        });
    },[props.match.params.id])

    return (
    <div>
       {user.message!=="Not Found"?(
        <div>
           <div className="layout">
                <img className="profile" src={user.avatar_url}  alt="profile pic Not available"></img>
                <div>
                    <h1>{props.match.params.id}</h1>
                    <h4>{user.bio}</h4>
                </div>
                {open?<button className="repobutton" onClick={()=>isOpen(!open)}>Close Repository</button>:
                <button className="repobutton" onClick={()=>isOpen(!open)}>View Repository</button>}
           </div>
           <div>
                 {open?<Repo user={props.match.params.id}/>:""}
           </div>
       </div>
       ):(
        <div className="modal">
            <div className="modal-content">
                <h1>Invalid Username</h1>
            </div>
        </div>
       )
    }
    </div>
    )
}
