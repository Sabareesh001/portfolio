import {Button, Grow, Zoom } from "@mui/material";
import { socials } from "../../components/navbar/data";
import { HeroContainer, HeroSec1, HeroSection, HeroSocials, HeroTechSec, Name, NameAndRole, ProfilePic, Role, SkillBox, SkillsContainer, SkillSection, StackContainer, StackSection } from "./styles";
import { StyledButton } from "../../atoms/button";
import { Download } from "@mui/icons-material";
import { skills, stackList } from "./data";
import { Heading, SubHeading } from "../../atoms/typography";

const Hero = ()=>{
    return(
        <HeroContainer container >
            <Grow in={true} timeout={900} >

            <HeroSection item>
                <HeroSec1>
                    <ProfilePic src="https://avatars.githubusercontent.com/sabareesh001" />
                    <NameAndRole>
                    <Name>
                        Sabareesh
                    </Name>
                    <Role>
                    Full Stack Developer
                    </Role>
                    </NameAndRole>
                    <HeroTechSec>
                  
                    <HeroSocials>

                      {
            socials.map((data)=>(
              <Button sx={{
                fontSize:'2rem'
              }}
              target="_blank"
              href={data.link}>
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
                            
            </Grow>
           
            <HeroSection>
                <StackSection>

                <Heading>
                    Stacks worked on
                </Heading>
                <Zoom in={true} timeout={600}>
                <StackContainer>
                {
                   stackList.map((stack)=>(
                    
                    stack.map((data)=>(
                        <SkillBox icon={data.image} background={data.background} color={data.color} alt={data.name}>

                        </SkillBox>
                    ))
                )) 
                }
               </StackContainer>
                                   
               </Zoom>
               </StackSection>
            </HeroSection>
            <Grow in={true} timeout={900}>

            <HeroSection>
                <SkillSection>
                <Heading align="center">
                    Skills
                </Heading>
                {
                    skills.map((skill)=>(
                        <>
                        <SubHeading >{skill.name}</SubHeading>
                        <SkillsContainer>
                        {
                            skill.list.map((data)=>(
                                <SkillBox alt={data.name} icon={data.image} background={data.background} color={data.color} />
                            ))
                        }
                        </SkillsContainer>
                        </>
                    ))
                }
                </SkillSection>
            </HeroSection>
                            
            </Grow>
        </HeroContainer>
    )
}

export {Hero};