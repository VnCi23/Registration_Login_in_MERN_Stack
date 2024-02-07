// import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style= {{backgroundColor : "gray"}} className="d-flex flex-column justify-content-center align-items-center text-center vh-100">
        <h1>Login Success Page</h1>
        <Link to='/login' className="btn btn-light my-5">Logout</Link>
    </div>
  )
}

export default Home