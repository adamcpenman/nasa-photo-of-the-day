import React from "react";
import axios from "axios";

function NasaData() {

      axios
      .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => console.log(res.data, "Nasa Data"))
      .catch(err => console.log(err));

}

export default NasaData;

console.log(NasaData());

//   axios
//       .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
//       .then(res => console.log(res.data, "Nasa Data"))
//       .catch(err => console.log(err));
