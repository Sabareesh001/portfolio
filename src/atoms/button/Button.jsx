import { Button, styled } from "@mui/material";

const StyledButton = styled(Button)(({theme})=>({
       textTransform:'capitalize',
       '&.MuiButton-outlined':{
           border:`solid ${theme.palette.primary.main} ${theme.border.container}`,
           '&:hover':{
            backgroundColor:theme.palette.primary.main,
            color:theme.palette.primary.back,
           }
       },
       fontSize:theme.fontSize.button,
}))
export {StyledButton};  