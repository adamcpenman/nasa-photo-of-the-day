import React from "react";
import styled from 'styled-components';
import { Spinner } from 'reactstrap';

const MainNav = styled.div`
margin-top: 20px;
// margin-bottom: 20px;
border-top: 1px solid #28515E;

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

function Footer() {
    function handleClick(e) {
    e.preventDefault();
    console.log('I was clicked');
  }

    return (
        <div className="navbarF">
             <MainNav>
             <NavStyles/>
             <Spinner style={{ color: '#F0F7F4', width: '.5rem', height: '.5rem' }} type="grow" />
                <AnchorStyles href="#" onClick={handleClick}>HOME</AnchorStyles>
                <AnchorStyles href="#" onClick={handleClick}>NASA</AnchorStyles>
                <AnchorStyles href="#" onClick={handleClick}>ABOUT US</AnchorStyles>
                <AnchorStyles href="#" onClick={handleClick}>CONTACT</AnchorStyles>
                <Spinner style={{ color: '#F0F7F4', width: '.5rem', height: '.5rem' }} type="grow" />
            <NavStyles/>
             </MainNav>
        </div>
    )
}

export default Footer;
