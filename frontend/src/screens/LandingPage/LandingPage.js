import React, { useEffect } from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import './LandingPage.css'

const LandingPage = ({history}) => {
   useEffect(() => {
     const userInfo = localStorage.getItem("userInfo");
     if (userInfo) history.push("/mytodos");
   }, [history]);
    return (
      <div className="main">
        <div
          className="intro-text"
          style={{ width: "100%", textAlign: "center" }}
        >
          <div>
            <h1 style={{ fontSize: "95px" }}>Todo App</h1>
          </div></div>
          <div className="buttonContainer row " style={{display:'flex',justifyContent:'space-around',marginTop:70}}>
            <div>
              <a href="/login">
                <Button size="lg" className="landingButton">
                  Login
                </Button>
              </a>
            </div>

            <div>
              <a href="/signup">
                <Button
                  size="lg"
                  className="landingButton"
                  variant="outline-primary"
                >
                  Sign Up
                </Button>
              </a>
            </div>
          
        </div>
      </div>
    );
}

export default LandingPage
