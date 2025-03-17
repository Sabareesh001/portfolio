import { styled, Typography } from "@mui/material";

const SubHeading = styled(Typography)(({theme})=>({
    fontSize:theme.fontSize.subHeading,
    color:theme.palette.text.primary,
    fontWeight:'bold',
    textWrap:'nowrap'
}))

export {SubHeading};