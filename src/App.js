import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import axios from "axios";
import { } from 'reactstrap';
import styled from 'styled-components';

//Importing all components
import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";


function App() {
  const [nasaImage, setNasaImage] = useState();
  const [nasaTitle, setNasaTitle] = useState();
  const [nasaBody, setNasaBody] = useState();

  useEffect(() => {
    axios 
        .get('https://api.nasa.gov/planetary/apod?api_key=FnOXIKqMs2in8YmsgRhwQ7Wuloja1nr73TedRhJf')
        .then ( res => {
          setNasaImage(res.data.url);
          setNasaTitle(res.data.title);
          setNasaBody(res.data.explanation);
          console.log(res.data);
        })
        .catch(error => {
          console.log('Error!', error);
        })
  }, []);

  // useEffect(()=> {
  //   axios
  //     .get('https://api.nasa.gov/planetary/apod?api_key=FnOXIKqMs2in8YmsgRhwQ7Wuloja1nr73TedRhJf')
  //     .then(res => setNasaImage(res.data.hdurl))
  //     .catch(err => console.log(err));
  // }, [])
  // useEffect(()=> {
  // axios
  //     .get('https://api.nasa.gov/planetary/apod?api_key=FnOXIKqMs2in8YmsgRhwQ7Wuloja1nr73TedRhJf')
  //     .then(res => setNasaTitle(res.data.title))
  //     .catch(err => console.log(err));
  // }, [])
  // useEffect(()=> {
  // axios
  //     .get('https://api.nasa.gov/planetary/apod?api_key=FnOXIKqMs2in8YmsgRhwQ7Wuloja1nr73TedRhJf')
  //     .then(res => setNasaBody(res.data.explanation))
  //     .catch(err => console.log(err));
  // }, [])

   return (
    <div className="App">
      <NavBar/>
      <Header />
      <Body pic={nasaImage} title={nasaTitle} body={nasaBody} />
      <Footer />
    </div>
  );
}



export default App;


