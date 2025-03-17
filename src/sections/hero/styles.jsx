import { Box, Grid2, styled, Table, TableCell, TableContainer, TableRow, Typography, useTheme } from "@mui/material";

const HeroContainer = styled(Grid2)(({theme})=>({
       padding:'1rem',
       alignContent:'center',
       gridTemplateColumns: 'repeat(auto-fill, minmax(33%, 1fr))',
       justifyContent:'center',
       gap:'3rem',
       paddingTop:'10rem'
}))


const HeroSection  = styled(Grid2)(({theme})=>({
    alignSelf:'center',
    justifyContent:'center',
    display:'flex',
    padding:'1rem',
}))

const HeroSec1  = styled(Box)(({theme})=>({
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    gap:'1rem',
    padding:'1.5rem',
    borderRadius:theme.radius.container,
    background: `${theme.palette.primary.back}`,
    background: `linear-gradient(90deg, ${theme.palette.primary.back} 0%, ${theme.palette.primary.main} 500%)`,
    border:`solid ${theme.palette.secondary.border} ${theme.border.box}`
}))

const HeroTechSec  = styled(Box)(({theme})=>({
     display:'flex',
     alignItems:'center',
     gap:'2rem',
     flexWrap:'wrap',
     justifyContent:'center'
}))

const HeroSocials = styled(Box)(({theme})=>({
    display:'flex',

}))

const Name = styled(Typography)(({theme})=>({
        color:theme.palette.text.primary,
        fontSize:'2rem',
        fontWeight:'bolder',
}))

const Role = styled(Typography)(({theme})=>({
    color:theme.palette.text.primary,
    fontSize:'1.5rem',
    fontWeight:'bolder',
    textDecoration : `underline wavy ${theme.palette.primary.main} 0.1rem`
}))

const NameAndRole = styled(Box)(({theme})=>({
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'column'
}))

const SkillBox = ({color,icon,background,alt,h='30rem',w='30rem'})=>{
    const theme = useTheme();
    return(
        <img src={icon}
        
        style={{
            border:`solid ${color} ${theme.border.box}` ,
            borderRadius:theme.radius.container,
            backgroundColor:background,
             padding:'1rem',
             background: `${theme.palette.primary.back}`,
             background: `linear-gradient(90deg, ${background} 0%, ${color} 500%)`,
        }}
        
        alt={alt} height={h} width={w} ></img>
    )
} 

const StackContainer = styled(Box)(({theme})=>({
   display:'flex',
   alignItems:'center',
   gap:'1rem'
}))

const StackSection = styled(Box)(({theme})=>({
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    gap:'1rem',
    flexWrap:'wrap'
}))

const ProfilePic = styled('img')(({theme})=>({
      height:"15rem",
      width:'15rem',
      borderRadius:'50rem',
      border:`solid ${theme.palette.primary.main}`,
      '&:hover':{
        height:'15.5rem',
        width:'15.5rem',
        cursor:'pointer',
         padding:'1rem'
      },
      transition:'0.9s',
     
}))

const SkillSection = styled(Box)(({theme})=>({
    display:'flex',
    flexDirection:'column',
    gap:'1rem',
    background: `${theme.palette.primary.back}`,
    background: `linear-gradient(90deg, ${theme.palette.primary.back} 0%, ${theme.palette.primary.main} 500%)`,
    border:`solid ${theme.palette.secondary.border} ${theme.border.box}`,
    padding:'1.5rem',
    borderRadius:theme.radius.container,
    flexWrap:'wrap'
}))

const SkillsContainer = styled(Box)(({theme})=>({
    display:'flex',
    gap:'1rem',
    flexWrap:'wrap',
    minWidth:'15rem'
}))

export  {HeroContainer,HeroSection,HeroSec1,Name,HeroTechSec,HeroSocials,ProfilePic,Role
,NameAndRole,SkillBox,StackContainer,StackSection,SkillSection,SkillsContainer
};