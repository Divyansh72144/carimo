import React, { useEffect, useState, useLayoutEffect } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { ICar } from "../../../typings/car";
import { Car } from "../../components/car";

import Carousel,{Dots,slidesToShowPlugin} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../components/responsive";

const TopCarsContainer = styled.div`
  ${tw`
    max-w-screen-lg
    w-full
    flex
    flex-col
    items-center
    justify-center
    pr-4
    pl-4
    md:pl-0
    md:pr-0
    mb-10
  `};
`;

const Title = styled.h2`
  ${tw`
    text-3xl
    lg:text-5xl
    text-black
    font-extrabold
  `};
`;

const CarsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    justify-center
    mt-7
    md:mt-10
  `};
`;

export function TopCars() {

  const [current,setCurrent]=useState(1); // Initialized to 1 to avoid the error

  const isMobile= useMediaQuery({maxWidth: SCREENS.sm});


  useEffect(() => {
    // Logic for updating the current state goes here
  }, [current]); // Include 'current' in the dependency array if needed



  const testCar1: ICar = {
    name: "Audi S3 Car",
    mileage: "10k",
    thumbnailSrc:
      "https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg",
    dailyPrice: 70,
    monthlyPrice: 1600,
    gearType: "Auto",
    gas: "Petrol",
  };

  const testCar2: ICar = {
    name: "HONDA City 5 Seater Car",
    mileage: "20k",
    thumbnailSrc:
      "https://shinewiki.com/wp-content/uploads/2019/11/honda-city.jpg",
    dailyPrice: 50,
    monthlyPrice: 1500,
    gearType: "Auto",
    gas: "Petrol",
  };

  useLayoutEffect(() => {
    // Reset the current slide to 0 when the screen size changes
    setCurrent(0);
  }, []); // Empty dependency array ensures that the effect is only run once

  const cars=[
    (<Car{...testCar1}/>),
    (<Car{...testCar2}/>),
    (<Car{...testCar1}/>),
    (<Car{...testCar2}/>),
    (<Car{...testCar1}/>),
    (<Car{...testCar2}/>),
  ]

  const numberOfDots = isMobile ? cars.length : Math.ceil(cars.length/3);

  return (
    <TopCarsContainer>
      <Title>Explore our Top Deals</Title>
      <CarsContainer>
        <Carousel value={current} onChange={setCurrent} 
          slides={cars}
          plugins={[
            "clickToChange",
            {
              resolve: slidesToShowPlugin,
              options:{
                numberOfSlides:3,
              },
            },
          ]}
          breakpoints = {{
            640: {
              plugins:[
                {
                  resolve:slidesToShowPlugin,
                  options:{
                    numberOfSlides:1
                  }
                },
                
              ]
            },
            900: {
              plugins:[
                {
                  resolve:slidesToShowPlugin,
                  options:{
                    numberOfSlides:1
                  }
                },
                
              ]
            }
          }}
          onResize={() => {
            // Nothing to do here, since the current slide is already reset in the useLayoutEffect hook
          }}
        />
      <Dots value={current} onChange={setCurrent}
        number={numberOfDots}/>
      
      </CarsContainer>
    </TopCarsContainer>
  );
}
