import { Box, Button } from "@mui/material";
import { socials } from "../../components/navbar/data";
import { skills, stackList } from "./data";
import { HeroContainer, HeroSec1, HeroSection, HeroSocials, HeroTechSec, Name, ProfilePic, SkillBox, SkillContainer, Stack, StackBox } from "./styles";
import { StyledButton } from "../../atoms/button";
import { Download } from "@mui/icons-material";
import { Heading } from "../../atoms/typography";

const Hero = ()=>{
    return(
        <HeroContainer container >
            <HeroSection item>
                <HeroSec1>
                    <ProfilePic src="https://avatars.githubusercontent.com/sabareesh001" />
                    <Name>
                        Sabareesh.T
                    </Name>
                    <HeroTechSec>
                  
                    <HeroSocials>

                      {
            socials.map((data)=>(
              <Button sx={{
                fontSize:'2rem'
              }} href={data.link}>
                {data.icon}
              </Button>
            ))
          }
                    </HeroSocials>
                    <StyledButton href="https://drive.google.com/uc?export=download&id=1OOMNG9yVaWB9DugI9FOE6EzyDX5tDiQO" variant="outlined" startIcon={<Download/>}>
                        Resume
                    </StyledButton>
                    </HeroTechSec>
                </HeroSec1>
            </HeroSection>
            <HeroSection item >
                    <SkillContainer>
                <Heading>
                        
                    Skills
                        </Heading>
                    <SkillBox>
{     skills.map((data)=>(
    <img height={'40rem'} width={'40rem'} src={data.image} alt={data.name} >
                      </img>

))
}
                    </SkillBox>
</SkillContainer>
             </HeroSection>
             <HeroSection   item>
                <StackBox>
                    <Heading>
                        Stack Worked On
                    </Heading>
  {                     
                        Stack({stackList:stackList[0],height:'40rem',width:'40rem'})
                    }
                </StackBox>
             </HeroSection>
        </HeroContainer>
    )
}

export {Hero};