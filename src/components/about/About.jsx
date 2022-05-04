import React from 'react'
import "./about.css";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

export default function About() {
    return (
        <div className="box" id="about">
            <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                <span className="head">ABOUT ME</span>
                <h2 className="heading">Who Am I?</h2>
                <div className="About">
                    <p> My name is <b>Ankit Sangwan</b> and I am currently working as Freelancer at <a target="_blank" href="https://www.rnaintouchsolutions.in/"><b>RNA InTouch Solutions</b></a>. I completed my degree in Bachelor of Science in Computer Science from Sant University of Delhi. I am much interested in developing new things which excite me a lot. :)  </p>
                    <p className="br">I love exploring new technologies and being a practitioner, I like to stay on top of latest trends. I try to leave every line of code I write more readable, accessible, and modular.
                    </p>
                </div>
            </ScrollAnimation>
        </div>
    )
}


