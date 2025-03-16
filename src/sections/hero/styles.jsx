import { Box, Grid2, styled, Table, TableCell, TableContainer, TableRow, Typography, useTheme } from "@mui/material";

const HeroContainer = styled(Grid2)(({theme})=>({
       padding:'2rem',
       alignContent:'center',
       gridTemplateColumns: 'repeat(auto-fill, minmax(33%, 1fr))',
       justifyContent:'center',
       marginRight:'3rem',
       marginLeft:'3rem',
       gap:'3rem'
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
        fontSize:'2.5rem',
        fontStyle:'italic',
}))


const StackBox = styled(Box)(({theme})=>({
       display:'flex',
       flexDirection:'column',
       gap:'1rem'
}))

const Stack = ({stackList,height,width})=>{
     const theme = useTheme();
     return(
        <TableContainer
        sx={{
            width:'min-content',
            marginLeft:'auto',
            marginRight:'auto'
        }}
        >

       
         {
             stackList.map((stack)=>{
                 
                 let margin = (Math.random()*4);
                console.log(margin);
               return  (
                <Table
                sx={{
                     width:'8rem',
                     marginLeft:`${margin}rem`,
                 }}
                 >
                   <TableRow
                   sx={{
                
                   }}
                   >
                <TableCell  sx={{
                    textAlign:'center',
                    border:`solid ${theme.palette.primary.main}`,
                    backgroundColor:'white',
                }}>
                <img  src={stack?.image} height={height} width={width} alt = {stack?.name}></img>
                </TableCell>
        </TableRow>
        </Table>
            )
            }
        )
            
        }
        </TableContainer>
     )

}

const ProfilePic = styled('img')(({theme})=>({
      height:"15rem",
      width:'15rem',
      borderRadius:'50rem',
      border:`solid ${theme.palette.primary.main}`,
      '&:hover':{
        boxShadow:`${theme.palette.primary.main} 0rem 0rem 1rem`,
        cursor:'pointer'
      }
}))

const SkillBox = styled(Box)(({theme})=>({
    fontSize:'1rem',
    display:'flex',
    gap:'2rem',
    justifyContent:'space-between',
    alignItems:'center'
}))


const SkillContainer = styled(Box)(({theme})=>({
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    gap:'2rem',
}))

export  {HeroContainer,HeroSection,HeroSec1,Name,Stack,HeroTechSec,HeroSocials,ProfilePic,StackBox,SkillBox
,SkillContainer
};