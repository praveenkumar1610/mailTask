import React from 'react'

export default function Input(props) {
    return (
       <input value={props.value}  placeholder={props.placeholder} onChange={(event)=>props.onChange(event)}>
       </input>
    )
}
