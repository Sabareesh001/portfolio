import { Box, Button, styled, useTheme } from "@mui/material";
import { Toggle } from "../../atoms/toggle";
import { useContext, useState } from "react";
import { ThemeContext } from "../../store/contextProvider";
import { Bedtime, MoreVert, WbSunny } from "@mui/icons-material";
const NavbarBox = styled(Box)(({theme})=>({
    width:"100%",
    padding:"1rem 0rem",
    backgroundColor:theme.palette.primary.back,
    borderBottom:`solid ${theme.palette.secondary.border} ${theme.border.container}`
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
    [theme.breakpoints.down('sm')]:{
        display:'none'
    }
}))

const PopUp = styled(Box)(({theme})=>({
    display:'flex',
    flexDirection:'column',
    position:'absolute',
    right:'0',
    top:'4rem',
    margin:'1rem',
    alignItems:'center',
    padding:'1rem',
    [theme.breakpoints.up('sm')]:{
        display:'none',
    },
    gap:theme.gap.menus,
    padding:'1rem 1.6rem',
    border:`solid ${theme.palette.secondary.border} ${theme.border.container}`,
    borderRadius:theme.radius.container,
    backgroundColor:theme.palette.primary.back
}))

const MobileNavMenu = styled(Box)(({theme})=>({
    
      [theme.breakpoints.up('sm')]:{
        display:'none'
      }
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
            color:theme.palette.secondary.main,
            backgroundColor:theme.palette.primary.main,
            
            '&:hover':{
                color:theme.palette.primary.main,
            },
            borderRadius:'100rem'
        }} onClick={changeMode}>
         {data.mode=='night'?<WbSunny fontSize="inherit"/>:<Bedtime fontSize="inherit"/>}
        </Toggle>
    )
}

const MoreButton = styled(Button)(({theme})=>({
    [theme.breakpoints.up('sm')]:{
        display:'none',
    },
}))

const MoreIcon = styled(()=>(<MoreVert/>))(({theme})=>({
    color:theme.palette.text.primary,
    [theme.breakpoints.up('sm')]:{
        display:'none',
    },
}))

export {NavbarBox,NavContent,Menus,ModeToggle,MoreIcon,PopUp,MoreButton,MobileNavMenu};