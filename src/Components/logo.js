import React from "react";
import styled from 'styled-components';
import logo from './img/logo.png'; 

const NasaLogo = styled.img`
display: flex;
justify-content: flex-start;
width: 15%;
height: auto;
margin-bottom: -80px;
`

function Logo () { 
    return (
    <div>
        <NasaLogo src={logo}></NasaLogo>
    </div>
    )
}

export default Logo;