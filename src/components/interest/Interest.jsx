import React, { Component } from 'react'
import './interest.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

export default function Interest() {
    return (
        <div className="box" id="interest">
            <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                <span className="head">WHAT I DO?</span>
                <h2 className="heading">HERE ARE SOME OF MY EXPERTISE</h2>
                <div className="Interest">
                    <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                        <div className="web">
                            <h3>Business Analytics</h3>
                            <p>I also have knowledge of Business Analytics and have experience in building visuals and Models. I also have completed multiple projects using PowerBI and Tableau. </p>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                        <div className="app">
                            <h3>Web Develpoment</h3>
                            <p>I am a full stack web developer(MERN) and build websites using HTML, CSS, Javascript, ReactJs.<br /> I have also good grasp on Python and MySQL</p>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                        <div className="other">
                            <h3>Other's Interest</h3>
                            <p>I also have decent hand in Python Development.<br />Java, Github are my other fields of interest. Currently, I am investing my free time in Reactjs </p>
                        </div>
                    </ScrollAnimation>
                </div>
            </ScrollAnimation>
        </div>
    )
}
