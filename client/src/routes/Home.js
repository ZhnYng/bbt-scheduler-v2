import React from "react";
import Nav from "../components/Nav";
import Goal from "../components/Home/Goal";
import Header from "../components/Home/Header";
import Statistics from "../components/Home/Statistics";
import Calendar from "../components/Home/Calendar";
import Update from "../components/Home/Update";

export default function Home(){

  const [user, setUser] = React.useState("");
  React.useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setUser(() => {return localStorage.getItem("user")})
    }else{
      window.location.href = '/login';
    }
  }, []);

  return(
    <>
    <Nav/>
    <div className="d-flex justify-content-center">
      <Header user={user}/>
    </div>
    <div className="container-fluid row justify-content-center my-5">
      <div className="col-5 d-flex flex-column align-items-center">
        <Goal/>
        <Statistics/>
      </div>
      <div className="col-3">
        <Calendar/>
      </div>
      <div className="col-3">
        <Update/>
      </div>
    </div>
    </>
  )
}