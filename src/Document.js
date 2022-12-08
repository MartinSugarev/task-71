import React, { useState, useRef} from 'react'
import './Document.css'


export default function Document({title, content}){

    const [active, setActive] = useState(true)
    const ref = useRef()

 const scroll = () => {
    const length = ref.current.scrollTop  
    const a = length + ref.current.clientHeight
     
    if(a >= ref.current.scrollHeight){
        setActive(() => false)
    }
    
 }
    return (
        <>
        <h1 className="title">{title}</h1>
        <p onScroll={scroll} ref={ref}  className="content">{content}</p>
        <button disabled={active ? true : false} >I Agree</button>
      </>
    )
}
