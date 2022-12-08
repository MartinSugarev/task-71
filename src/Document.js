import React, {useEffect, useState} from 'react'
import './Document.css'


export const Document = ({title, content}) => {

    const [active, setActive] = useState(true)

 const scroll = () => {
    const length = document.querySelector('.content').scrollTop  
    const a = length + document.querySelector('.content').clientHeight
     
    if(a >= document.querySelector('.content').scrollHeight){
        setActive(() => false)
    }
    
 }



    return (
        <>
        <h1 className="title">{title}</h1>
        <p onScroll={scroll}  className="content">{content}</p>
        <button disabled={active ? true : false} >I Agree</button>
      </>
    )
}
