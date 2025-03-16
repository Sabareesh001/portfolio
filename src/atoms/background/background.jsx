import { Box, colors, styled } from "@mui/material";

const Background = styled(Box)(({theme})=>(
   { 
     backgroundColor:theme.palette.secondary.main,
     height:"100vh",
     width:"100vw"
   }
))

export {Background};