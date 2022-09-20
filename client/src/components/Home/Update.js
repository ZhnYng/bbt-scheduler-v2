import React, { useEffect } from "react";
import Button from 'react-bootstrap/Button';

export default function Update(){
    
  function handleSubmit(){
    alert("U drank")
  }
  
  return (
    <div className="shadow rounded p-5 text-center d-flex justify-content-around flex-column">
      <h1 className="display-5 text-center">Had a drink today?</h1>
      <div className="display-1">
        &#128064;
      </div>
      <Button variant="success" className="text-center p-2 my-5 fs-3" onClick={handleSubmit}>Admit it</Button>
    </div>
  )
}