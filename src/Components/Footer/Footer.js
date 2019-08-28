import React from "react";
import "./Footer.css"

function Footer() {
    function handleClick(e) {
    e.preventDefault();
    console.log('I was clicked');
  }

    return (
        <div className="navbarF">
            <nav className="navF"> 
                <a href="#" onClick={handleClick}>HOME</a>
                <a href="#" onClick={handleClick}>NASA</a>
                <a href="#" onClick={handleClick}>ABOUT US</a>
                <a href="#" onClick={handleClick}>CONTACT</a>
            </nav>
        </div>
    )
    
}

export default Footer;
