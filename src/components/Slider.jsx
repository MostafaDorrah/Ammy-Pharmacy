import { ArrowLeftOutlined, ArrowRight } from '@mui/icons-material';
import {React, useState} from 'react'
import { ApiSlides } from "../apifolder/SliderApi";
import './Slider.css'
import Button from "@mui/material/Button";

function Slider() {
    const [slides] = useState(ApiSlides);
    const [activeSlide, setActiveSlide] = useState(0);

    const arrowStyle =
      "rounded-full bg-grey flex justify-center items-center shadow-md hover:cursor-pointer";

    const nextSlide = () => {
      if (activeSlide === slides.length - 1) {
        setActiveSlide(0);
      } else {
        setActiveSlide(activeSlide + 1);
      }
    };
    const prevSlide = () => {
      if (activeSlide === 0) {
        setActiveSlide(slides.length - 1);
      } else {
        setActiveSlide(activeSlide - 1);
      }
    };
  return (
    <div className="slider h-[540px] flex items-center justify-between mobile:hidden">
      <div className={arrowStyle}>
        <ArrowLeftOutlined style={{ fontSize: "50px" }} onClick={prevSlide} />
      </div>
      {slides.map((slide, index) => {
        if (index === activeSlide) {
          return (
            <div
              className={
                `wrapper flex w-[100%] h-[500px] items-center justify-center shadow-2xl rounded-lg border-[#c0c0c0] border-10px overflow-hidden relative ` +
                slide.background
              }
            >
              <div className="flex-1 flex justify-center items-center h-[100%]">
                <img
                  className=" h-[100%] object-cover"
                  src={slide.src}
                  alt="PHARMACY_Logo"
                />
              </div>
              <div className="discription flex flex-col flex-1 place-items-start justify-center ml-11">
                <h2 className="text-[55px]">{slide.content.h2}</h2>
                <h6 className=" text-[30px]">{slide.content.h6}</h6>
                <p className=" text-[30px]">{slide.content.p}</p>
                {/* <Button
                  variant="contained"
                  style={{
                    color: "#fffff",
                    backgroundColor: "#97DECE",
                    marginRight: "5px",
                    marginTop: "10px",
                  }}
                >
                  Shop Now
                </Button> */}
              </div>
            </div>
          );
        }
      })}
      <div className={arrowStyle}>
        <ArrowRight style={{ fontSize: "50px" }} onClick={nextSlide} />
      </div>
    </div>
  );
}

export default Slider