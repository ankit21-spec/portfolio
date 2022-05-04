import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "./image.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "animate.css/animate.min.css";
import { GoProject } from 'react-icons/go'
import { FaArrowCircleDown } from 'react-icons/fa'
import hello from '../images/hello.png'
import pencil from '../images/pencil.png'


export default function Image() {
    return (
        <div className="carousel_container" id="start">
            {/* <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible ={true}> */}
            <Carousel className="carousel" dynamicHeight infiniteLoop={true} interval={6000} useKeyboardArrows={true} transitionTime={1700} emulateTouch showArrows={false} autoPlay showStatus={false} showThumbs={false} >
                <div className="image_container" >
                    <img className="image" src={hello} alt="myImage" />
                    <div className="h1">
                        <h1 >I'm Ankit</h1>
                        <a href="https://drive.google.com/file/d/1KtxXiYoOBQ8dGc149gdwDA18ojfzHSW4/view?usp=sharing" rel="opener noreferrer" target="">VIEW CV   <FaArrowCircleDown /></a>
                    </div>
                </div>
                <div className="image_container">
                    <img className="image" src={pencil} alt="myImage" />
                    <div className="h2">
                        <h1> I love building</h1>
                        <h1>THINGS!!</h1>
                        <a href="https://github.com/ankit21-spec" rel="opener noreferrer" target="">VIEW PROJECTS   <GoProject /></a>
                    </div>
                </div>
            </Carousel>
            {/* </ScrollAnimation> */}
        </div>
    )
}

