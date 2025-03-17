import { Divider, useTheme } from "@mui/material";

const VerticalDivider =  ()=>{
    const theme = useTheme();
    return(
        <Divider sx={{height:'2rem',width:theme.border.container,backgroundColor:theme.palette.secondary.border}} />

    )
}

export {VerticalDivider};