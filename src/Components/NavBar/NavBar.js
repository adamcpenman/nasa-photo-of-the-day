import React from "react";
import "./NavBar.css";
import styled from 'styled-components';

const MainNav = styled.div`
margin-top: 20px;
margin-bottom: 20px;
background-color: #28515E;
height: 50px;
`

const NavStyles = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
`

const AnchorStyles = styled.a`
    text-decoration: none; 
    padding-left: 20px;
    padding-right: 10px;
`

function NavBar() {
    return (
        <div>
            <MainNav>
            <NavStyles/>
           
                <AnchorStyles href="#">HOME</AnchorStyles>
                <AnchorStyles href="#">NASA</AnchorStyles>
                <AnchorStyles href="#">ABOUT US</AnchorStyles>
                <AnchorStyles href="#">CONTACT</AnchorStyles>
            
            <NavStyles/>
            </MainNav>
        </div>
    )
}

export default NavBar;