import React, { useState, useEffect} from "react";
import axios from "axios";

function Header(props) {
    const [dateHeader, setDateHeader] = useState();

useEffect(()=> {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=FnOXIKqMs2in8YmsgRhwQ7Wuloja1nr73TedRhJf')
      .then(res => setDateHeader(res.data.date))
      .catch(err => console.log(err));
  }, [])
return (
    <p>
        {dateHeader}
    </p>
    );
}


     


export default Header;