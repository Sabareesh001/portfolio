import { useTheme } from "@emotion/react"
import { ThemeContext } from "../store/contextProvider";
import { Typography } from "@mui/material";
const Signature = () => {
    const theme = useTheme(ThemeContext);
    return (
     <Typography
     sx={{
      color:theme.palette.primary.main,
      fontFamily:'Cedarville Cursive',
      fontSize:theme.fontSize.heading,
      fontWeight:'bolder'
     }}
     >
        {`Sabareesh`}
     </Typography>
    )
}

export {Signature};