import React, { useEffect } from 'react';
import './App.css';
import { useState } from "react";

function TestOne() {

    const [book,setBook] = useState ({
      title: "100 Startup",
      ahtor: "Chris Guillibaut",
      yers: 2010,
      rating: "3 stars"
    });
  
    const Chengerating = () =>{
      setBook({...book, yers: "2 stars"})
    }
  
    useEffect(() =>{
      console.log ("KJKLJLK")
    })
  
    return (
      <div>
        <h2>{book.title}</h2>
        <h2>{book.ahtor}</h2>
        <h2>{book.yers}</h2>
        <h2>{book.rating}</h2>
        <button onClick={Chengerating}>Click</button>
      </div>
    );
  }
  
  export default TestOne;