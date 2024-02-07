import React, { useCallback, useEffect } from 'react';
import './App.css';
import { useState } from "react";
import TestOne from './TestOne';
import { get } from 'lodash';

function App() {

  const [advice, setAdvice] = useState("");


  // I Способ
  // useEffect(() =>{
  //   getAdvice();
  // }, [])

  // const getAdvice = async () =>{
  //   const response = await fetch (`https://api.quotable.io/random `);
  //   const data = await response.json();
  //   console.log(data);
  //   setAdvice(data.content)
  // }

 
  // III способ
  const getAdvice = useCallback(async () =>{
    const response = await fetch (`https://api.quotable.io/random `);
    const data = await response.json();
    setAdvice(data.content)
  }, [])

  useEffect( () =>{
    getAdvice()
  }, [getAdvice])



  return (
    <div>
      <p>{advice}</p>
    </div>
  );
}

export default App;
