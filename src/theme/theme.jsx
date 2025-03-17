import { createTheme } from "@mui/material";
import { darkMode } from "./darkMode";
import { lightMode } from "./lightMode";
const getTheme = (mode)=>{
  const theme = createTheme(
    {...(mode=='night'?darkMode:lightMode), 
      typography:{
        fontFamily:'Stfu',
      },
      fontSize:{
        heading : '2rem',
        subHeading : '1rem',
        button : '1rem'
      },
      gap:{
      menus:'1rem'
      },
      border:{
        container:'0.03125rem',
        box:'0.1rem'
      },
      radius:{
        container:'0.5rem',
      },
}
  );

  return theme;
}

export {getTheme};