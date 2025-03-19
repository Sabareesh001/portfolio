import {Button, ClickAwayListener } from "@mui/material";
import { Menus, MobileNavMenu, ModeToggle, MoreButton, MoreIcon, NavbarBox, NavContent, PopUp } from "./styles";
import { MenuButton } from "../../atoms/menuButton";
import { navMenus, socials } from "./data";
import { useRef, useState } from "react";
import { Signature } from "../../assets/signature";
import { VerticalDivider } from "../../atoms/divider";

const Navbar  = ()=>{
    const [isPopMenu,setPopMenu] = useState(false);
    const togglePopMenu = ()=>{
      setPopMenu((prev)=>(!prev))
    }
    const popRef = useRef();
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
            <VerticalDivider/>
            {
            socials.map((data)=>(
              <Button sx={{
                fontSize:'2rem'
              }} target="_blank" href={data.link}>
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