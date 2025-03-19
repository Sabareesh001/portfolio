import { CardActions, CardContent, CardHeader, CardMedia, Zoom } from "@mui/material";
import { Heading } from "../../atoms/typography";
import { CarouselContainer, CarouselWrapper, NextButton, PrevButton, ProjectCard, ProjectImage, ProjectSection, ShadowDivLeft, ShadowDivRight } from "./styles"
import { projects } from "./data";
import { StyledButton } from "../../atoms/button";
import { ArrowBackIos, GitHub, Launch, Link, LinkSharp } from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './styles.css';
const Projects = ()=>{
    
    const swiperRef  =useRef();

    return(
        <ProjectSection>
            <Heading marginBottom={'1rem'} align="center">
             Projects
            </Heading>
        <Swiper
        modules={[A11y,Autoplay]} 
        onSwiper={(swiper)=>{
            swiperRef.current = swiper;
        }}
        mousewheel
        breakpoints={
        {
            0:{
             slidesPerView:1
            },
            700:{
             slidesPerView:1.5
           },
           900:{
             slidesPerView:2
           },
           1340:{
            slidesPerView:3
           },
        }
        }
        draggable={true}
        autoplay={true}
        centeredSlides={true}
        centeredSlidesBounds={true}
        loop

        >
            <PrevButton onClick={()=>{
                swiperRef.current?.slidePrev()}}/>
            <NextButton onClick={()=>{swiperRef.current?.slideNext()}}/>
            {
                projects.map((data,i)=>(
                    <SwiperSlide >
                <ProjectCard >
                    <CardHeader  title={data.name + i}/>
                    <ProjectImage image={data.image}/>
                    <CardContent>
                      {
                          
                    }
                    </CardContent>
                    <CardActions disableSpacing style={{ width: '100%', justifyContent: 'flex-end' }}>
                        <StyledButton sx={{fontSize:'2rem'}}>
                            <GitHub fontSize="inherit"/>
                        </StyledButton>
                        <StyledButton >
                           <Launch/>
                        </StyledButton>
                    </CardActions>
                </ProjectCard>
                    </SwiperSlide>
                ))
            }
           </Swiper>
        </ProjectSection>
    )
}

export {Projects};