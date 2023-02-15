import React from "react";
import Navbar from "./Navbar";
import "./Navbar.css"

export default function Header() {
    return (
      <div>
      <header>
      <h1>Nebiat H Nana</h1>
      <a href="/about"><img className="header-logo" src="/assets/logo.png" alt="Nebiat"/></a>
    
<Navbar/>
  </header>
  </div>
    );
  }
