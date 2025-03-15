import { Box, Button, Typography } from "@mui/material";
import { Menus, MobileNavMenu, ModeToggle, MoreButton, MoreIcon, NavbarBox, NavContent, PopUp } from "./styles";
import { Heading } from "../../atoms/typography";
import { MenuButton } from "../../atoms/menuButton";
import { navMenus } from "./data";
import { useState } from "react";

const Navbar  = ()=>{
    const [isPopMenu,setPopMenu] = useState(false);
    return(
      <NavbarBox>
         <NavContent>
          <Heading>
            {"<--Sabareesh-->"}
          </Heading>
          <MobileNavMenu>
          <ModeToggle>
          </ModeToggle> 
          <MoreButton disableRipple onClick={()=>{setPopMenu((prev)=>(!prev))}}>
            <MoreIcon/>
          </MoreButton>
          </MobileNavMenu>
          <Menus>
          {
            navMenus.map((data)=>(
              <MenuButton>
                {data.name}
              </MenuButton> 
            ))
          }      
            <ModeToggle>
            </ModeToggle> 
          </Menus> 
            {isPopMenu && <PopUp>
            {
            navMenus.map((data)=>(
              <MenuButton>
                {data.name}
              </MenuButton> 
            ))
          }  
        
            </PopUp>}
         </NavContent>
      </NavbarBox>
    )
}

export {Navbar};