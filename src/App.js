import "./App.css";
import React, {useEffect, useState} from 'react'
import  Document  from './Document'

 function App() {


  const [text, setText] = useState(null)

  const fetchData = () => {
      fetch('https://jaspervdj.be/lorem-markdownum/markdown.txt')
      .then(response => response.text())
      .then(data => {
          setText(() => data)
      })
  }

  useEffect(() => {
     fetchData()  
  }, [])

  return (
    <Document title={'Terms and Conditions'} content={text} />
  );
}

export default App

