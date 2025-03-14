import { Box, colors, styled } from "@mui/material";

const Background = styled(Box)(({theme})=>(
   { backgroundColor  : theme.palette.primary.light,
     height:"100vh",
     width:"100%"
   }
))

export {Background};