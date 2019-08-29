import React, { useState, useEffect} from "react";
import axios from "axios";
import Clock from 'react-live-clock';
import styled from 'styled-components';

const Header2 = styled.h2`
color: #D3AE71;
`

function Header(props) {
    const [dateHeader, setDateHeader] = useState();

useEffect(()=> {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=FnOXIKqMs2in8YmsgRhwQ7Wuloja1nr73TedRhJf')
      .then(res => setDateHeader(res.data.date))
      .catch(err => console.log(err));
  }, [])
return (
    <div>
        <Header2> Time: <Clock format={'h:mm:ssa'} ticking={true} timezone={'US/Central'} /> </Header2>
        <h2> Date: {dateHeader} </h2>
    </div>
    );
}


     


export default Header;