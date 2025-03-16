import { Button, styled } from "@mui/material";

const MenuButton = styled(Button)(({theme})=>({
     '&:hover':{
        color:theme.palette.primary.main,
        border:`solid ${theme.palette.primary.main} 0.5px`,
        borderBottom:`solid ${theme.palette.primary.main}`,
    },
     border:`solid transparent 0.5px`,
     fontSize:theme.fontSize.button,
     color:theme.palette.text.primary,
     borderBottom:`solid transparent`,
     textTransform:'capitalize'
}))

export {MenuButton};