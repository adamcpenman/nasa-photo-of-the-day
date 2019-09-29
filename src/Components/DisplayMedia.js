import React from 'react'
import ReactPlayer from 'react-player';
import styled from 'styled-components';

const ImgStyle = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

function DisplayMedia({ nasaMedia, hdurl }) {
    return ( nasaMedia === "video" ? 
    <ReactPlayer url={ hdurl } width='100%' height='60vh' alt="NASA" controls='true'/> :
    <ImgStyle src={ hdurl } alt="NASA" />
    )
}

export default DisplayMedia;