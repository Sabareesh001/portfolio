import { Box, Button, ClickAwayListener, Icon, Typography } from "@mui/material";
import { Menus, MobileNavMenu, ModeToggle, MoreButton, MoreIcon, NavbarBox, NavContent, PopUp } from "./styles";
import { Heading } from "../../atoms/typography";
import { MenuButton } from "../../atoms/menuButton";
import { navMenus, socials } from "./data";
import { useRef, useState } from "react";
import { Signature } from "../../assets/signature";

const Navbar  = ()=>{
    const [isPopMenu,setPopMenu] = useState(false);
    const togglePopMenu = ()=>{
      setPopMenu((prev)=>(!prev))
    }
    const popRef = useRef();
    const moreIconRef = useRef();
    return(
      <NavbarBox>
         <NavContent>
          <Signature/>
          <MobileNavMenu>
          <ModeToggle>
          </ModeToggle> 
          <MoreButton ref={popRef} disableRipple onClick={togglePopMenu}>
            <MoreIcon  />
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
          {
            socials.map((data)=>(
              <Button sx={{
                fontSize:'2rem'
              }}  href={data.link}>
                {data.icon}
              </Button>
            ))
          }
            <ModeToggle>
            </ModeToggle> 
          </Menus> 
          <ClickAwayListener onClickAway={(e)=>{
            console.log(e.target.parentElement)
            if(!popRef.current.contains(e.target)){
              setPopMenu(false);
            }
          }}>
           <PopUp
             modifiers={[
              {
                name: "offset",
                options: {
                  offset: [-40, 0],
                },
              },
            ]}
           anchorEl={popRef.current} open={isPopMenu}>
            {
            navMenus.map((data)=>(
              <MenuButton>
                {data.name}
              </MenuButton> 
            ))
          }  
            </PopUp>
          </ClickAwayListener>
         </NavContent>
      </NavbarBox>
    )
}

export {Navbar};