import firebase from "firebase";
import React, { useState, useEffect } from "react";
import "./css/Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  const transitionNavbar = () => {
    if (window.scrollY>100) {
      handleShow(true)
    } else {
         handleShow(false)
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar)
    return ()=>{window.removeEventListener("scroll", transitionNavbar)}
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__content">
        <img
          src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png"
          className="logo"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          className="nav_avatar"
          onClick={() => firebase.auth().signOut()}
        />
      </div>
    </div>
  );
}

export default Nav;
