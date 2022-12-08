import React, { useState, useRef} from 'react'
import './Document.css'


 function Document(props){

    const [active, setActive] = useState(true)
    const ref = useRef()

 const scroll = () => {
    const length = ref.current.scrollTop  
    const a = length + ref.current.clientHeight
     
    if(a >= ref.current.scrollHeight){
        setActive(() => false)
    }
    
 }
    return ( <>
        <h1 className="title">{props.title}</h1>
        <p onScroll={scroll} ref={ref}  className="content">{props.content}</p>
        <button disabled={active ? true : false} >I Agree</button>
      </>
    )
}

export default Document
