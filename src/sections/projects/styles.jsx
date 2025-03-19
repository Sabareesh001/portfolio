import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Box, Card, CardMedia, styled } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";

const ProjectSection  = styled(Box)(({theme})=>({
    margin:'1rem',
    position:'relative'
}))

const ProjectCard = styled(Card)(({theme})=>({
    backgroundColor:theme.palette.primary.back,
    border:`solid ${theme.palette.primary.main} ${theme.border.box}`,
    background: `${theme.palette.primary.back}`,
    padding:'2rem 2rem',
    minWidth:'20rem',
    maxWidth:'40rem',
    background: `linear-gradient(90deg, ${theme.palette.primary.back} 0%, ${theme.palette.primary.main} 500%)`,
}))

const ProjectImage = styled(CardMedia)(({theme})=>({
    height:'20rem',
    borderRadius:theme.radius.container,
    border:`solid ${theme.palette.primary.main} ${theme.border.box}`,
}))

const NextButton = styled(ArrowForwardIos)(({theme})=>({
    color:'white',
    padding:'1rem',
    backgroundColor:theme.palette.primary.main,
    boxShadow : `${theme.palette.primary.main} 0rem 0rem 1rem`,
    border:`solid ${theme.palette.secondary.border} ${theme.border.box}`,
    borderRadius:'100rem',
    position:'absolute',
    right:'0',
    top:0,
    marginTop:'auto',
    marginBottom:'auto',
    bottom:0,
    zIndex:2,
    cursor:'pointer'
}))

const PrevButton = styled(ArrowBackIos)(({theme})=>({
    color:'white',
    padding:'1rem',
    position:'absolute',
    boxShadow : `${theme.palette.primary.main} 0rem 0rem 1rem`,
    backgroundColor:theme.palette.primary.main,
    border:`solid ${theme.palette.secondary.border} ${theme.border.box}`,
    borderRadius:'100rem',
    left:'0%',
    top:0,
    marginTop:'auto',
    marginBottom:'auto',
    bottom:0,
    zIndex:2,
    cursor:'pointer'
}))

const CarouselWrapper = styled(Box)(({theme})=>({
      overflow:'scroll',
    }))
    
const CarouselContainer = styled(Box)(({theme})=>({
        display:'flex',
        gap:'1rem',
        transition: "transform 0.5s ease-in-out",
        animation: 'slideX 15s linear infinite'
}))

const ShadowDivRight = styled(Box)(({theme})=>({
    position:'absolute',
    height:'100%',
    width:'0.05rem',
    zIndex:1,
    backgroundColor:theme.palette.primary.shadow,
    boxShadow:`${theme.palette.primary.shadow} 0rem 0rem 2rem 2rem`,
    right:-15
}))
const ShadowDivLeft = styled(Box)(({theme})=>({
    position:'absolute',
    height:'100%',
    width:'0.05rem',
    zIndex:1,
    backgroundColor:theme.palette.primary.shadow,
    boxShadow:`${theme.palette.primary.shadow} 0rem 0rem 2rem 2rem`,
    left:-15
}))

export {ProjectSection,ProjectCard,CarouselWrapper,CarouselContainer,ProjectImage,NextButton,PrevButton,ShadowDivRight,ShadowDivLeft};