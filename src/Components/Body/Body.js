import React from "react";
import "./Body.css"
import styled from 'styled-components';

const MainImg = styled.img`
width: 65%;
height: auto;
border-radius: 7px
`

const H2 = styled.h2`
margin-top: 20px;
margin-bottom: 10px;
color: #8E9AAF;
font-family: 'Space Mono', monospace;
font-family: 'Gayathri', sans-serif;
`

const Paragraph = styled.p`
width: 70%;
`

const FlexDiv = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
`




function Body(props) {
    return (
        <div className="bodyContainer">
            <div className="pictureElement">
                <H2> Picture of the Day</H2>
                <MainImg id="mainPicture" src={props.pic} alt="Random"></MainImg>
            </div>

            <FlexDiv>
                
                <H2> Title: {props.title}</H2>
               <Paragraph>
                    <b>Explanation:</b> {props.body}
                </Paragraph>
                
            </FlexDiv>


        </div>
        );
    }

export default Body;