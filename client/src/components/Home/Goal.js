import React from "react";
import Form from 'react-bootstrap/Form';

export default function Goal(){

  const [goal, setGoal] = React.useState('');

  function handleChange(prevGoal){
    setGoal(prevGoal => {return goal})
  }

  return(
    <div className="col-12 shadow rounded px-5 py-4">
      <Form.Group className="my-3" controlId="goal">
        <Form.Label className="fs-3">Seems that you havent set a goal</Form.Label>
        <div className="row">
          <div className="col-6">
            <Form.Control name="goal" type="text" placeholder="No. of cups" 
            onChange={handleChange} value={goal}/>
          </div>
          <p className="fs-5 col-4">/ month</p>
        </div>
      </Form.Group>
    </div>
  )
}