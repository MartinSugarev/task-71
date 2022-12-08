import React, {useEffect, useState} from 'react'
import './Document.css'


export const Document = ({title, content}) => {

    const [active, setActive] = useState(true)
    const [btnFromTop, setBtnFromTop] = useState(null)
    const [btnPosition,setBtnPosition] = useState(null) 

    // useEffect(() => {
    //     document.querySelector('.container').addEventListener('scroll', () => {
    //   const length = document.querySelector('.container').scrollTop  
    //  const btn =  document.querySelector('button').offsetTop
    //  setBtnFromTop(length)
    //  setBtnPosition(btn)
    //   })
    // }, [])


 const scroll = () => {
    const length = document.querySelector('.container').scrollTop  
    const btn =  document.querySelector('button').offsetTop
    setBtnFromTop(length)
    setBtnPosition(btn)
 }

    useEffect(() => {
  const a = document.querySelector('.container').scrollTop + document.querySelector('.container').clientHeight
   
  if(a >= btnPosition){
      setActive(() => false)
  }
    
    }, [btnFromTop])


    return (
        <div onScroll={() => scroll()} className="container">
            <h1 className="title">{title}</h1>
            <p className="content">{content}</p>
            <button disabled={active ? true : false} >I Agree</button>
        </div>
    )
}
