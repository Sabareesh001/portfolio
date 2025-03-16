import { Box, Button, Popper, styled, useTheme } from "@mui/material";
import { Toggle } from "../../atoms/toggle";
import { useContext, useState } from "react";
import { ThemeContext } from "../../store/contextProvider";
import { Bedtime, MoreVert, WbSunny } from "@mui/icons-material";
const NavbarBox = styled(Box)(({theme})=>({
    width:"100%",
    padding:"1rem 0rem",
    backgroundColor:theme.palette.primary.back,
    borderBottom:`solid ${theme.palette.secondary.border} ${theme.border.container}`,
    position:'fixed',
    zIndex:999
}))

const NavContent = styled(Box)(({theme})=>({
    padding:"0rem 1rem",
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
}))

const Menus = styled(Box)(({theme})=>({
    display:'flex',
    alignItems:'center',
    gap:theme.gap.menus,
    [theme.breakpoints.down('md')]:{
        display:'none'
    }
}))

const PopUp = styled(Popper)(({theme})=>({
    display:'flex',
    flexDirection:'column',
    [theme.breakpoints.up('md')]:{
        display:'none',
    },
    zIndex:1000,
    gap:theme.gap.menus,
    padding:'1rem 1.6rem',
    border:`solid ${theme.palette.secondary.border} ${theme.border.container}`,
    backgroundColor:theme.palette.primary.back,
    borderRadius:theme.radius.container,
}))

const MobileNavMenu = styled(Box)(({theme})=>({
    
      [theme.breakpoints.up('md')]:{
        display:'none'
      },
}))

const ModeToggle = ()=>{
    const data = useContext(ThemeContext);
    const theme =  useTheme();
    const changeMode = ()=>{
        console.log(data);
        data.setMode(data.mode=='night'?'day':'night');
    }
    
    return(
        <Toggle sx={{
            width:'2.5rem',
            position:'relative',
            fontSize:theme.fontSize.button,
            color:theme.palette.text.secondary,
            backgroundColor:theme.palette.text.primary,
            '&:hover':{
                color:theme.palette.primary.main,
            },
            [theme.breakpoints.down(400)]:{
                 display:'none'
            },
            borderRadius:'100rem'
        }} onClick={changeMode}>
         {data.mode=='night'?<WbSunny color="inherit" fontSize="inherit"/>:<Bedtime color="inherit" fontSize="inherit"/>}
        </Toggle>
    )
}

const MoreButton = styled(Button)(({theme})=>({
    [theme.breakpoints.up('md')]:{
        display:'none',
    },
}))

const MoreIcon = styled(()=>(<MoreVert/>))(({theme})=>({
    color:theme.palette.text.primary,
    [theme.breakpoints.up('md')]:{
        display:'none',
    },
}))

export {NavbarBox,NavContent,Menus,ModeToggle,MoreIcon,PopUp,MoreButton,MobileNavMenu};