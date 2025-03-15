import { styled, Typography } from "@mui/material";

const Heading = styled(Typography)(({theme})=>({
    fontSize:theme.fontSize.heading,
    color:theme.palette.text.primary,
    fontWeight:'bold',
    textWrap:'nowrap'
}))

export {Heading};