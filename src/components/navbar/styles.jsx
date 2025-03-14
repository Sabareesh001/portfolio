import { Box, styled } from "@mui/material";

const NavbarBox = styled(Box)(({theme})=>({
    width:"100%",
    backgroundColor:theme.palette.primary.main,
    padding:"2rem"
}))

export {NavbarBox};