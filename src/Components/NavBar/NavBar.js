import React from "react";
import "./NavBar.css";
import styled from 'styled-components';
import { Spinner } from 'reactstrap';

const MainNav = styled.div`
margin-top: 20px;
margin-bottom: 20px;
border-bottom: 1px solid #28515E;

`

const NavStyles = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
`

const AnchorStyles = styled.a`
    text-decoration: none; 
    padding-left: 30px;
    padding-right: 20px;
`

function NavBar() {
    return (
        <div>
            <MainNav>
            <NavStyles/>
                <Spinner style={{ color: '#F0F7F4', width: '.5rem', height: '.5rem' }} type="grow" />
                <AnchorStyles href="#">HOME</AnchorStyles>
                <AnchorStyles href="#">NASA</AnchorStyles>
                <AnchorStyles href="#">ABOUT US</AnchorStyles>
                <AnchorStyles href="#">CONTACT</AnchorStyles>
                <Spinner style={{ color: '#F0F7F4', width: '.5rem', height: '.5rem' }} type="grow" />
            
            <NavStyles/>
            </MainNav>
        </div>
    )
}

export default NavBar;