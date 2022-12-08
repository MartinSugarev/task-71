import React, {useEffect, useState} from 'react'
import './Document.css'


export const Document = ({title, content}) => {

    const [active, setActive] = useState(true)

 const scroll = () => {
    const length = document.querySelector('.container').scrollTop  
    const a = length + document.querySelector('.container').clientHeight
     
    if(a >= document.querySelector('.container').scrollHeight){
        setActive(() => false)
    }
    
 }



    return (
        <div onScroll={() => scroll()} className="container">
            <h1 className="title">{title}</h1>
            <p className="content">{content}</p>
            <button disabled={active ? true : false} >I Agree</button>
        </div>
    )
}
