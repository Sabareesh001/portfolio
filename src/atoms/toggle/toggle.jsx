import { styled, ToggleButton } from "@mui/material";

const Toggle = styled(ToggleButton)(({theme})=>(
    {
        border:`solid ${theme.palette.secondary.border} 0.5px`
    }
))

export {Toggle};