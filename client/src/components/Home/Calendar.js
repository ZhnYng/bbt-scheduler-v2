import React from "react";

export default function Calendar(){

  const [days, setDays] = React.useState(99)

  return (
    <div className="shadow p-4 text-center rounded">
      <h1 className="display-5">
        Your last drink was only
        <div className="p-5 mx-5 my-4 display-1 fw-bold border 
        border-white border-3 rounded text-white" 
        style={{backgroundColor: '#eb9347'}}>
          {days}
        </div>
        days ago
      </h1>
    </div>
  )
}