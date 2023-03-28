import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import Form from '../Form';

import { darkTheme, lightTheme, GlobalStyles } from "./theme";
import './styles.scss';

const Header=()=>{
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');

  const switchTheme = () => {
    if(theme==="dark"){
      setTheme("light");
      localStorage.setItem('theme', 'light');
    } else{
      setTheme("dark");
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
    <GlobalStyles />
    <header className='info'>
      <h1 className="info__title">Movies app using React and Redux</h1>
      <button onClick={switchTheme} className="info__btn">Switch Theme</button>
      <Form />
    </header>
  </ThemeProvider>
  )
}



export default Header;
