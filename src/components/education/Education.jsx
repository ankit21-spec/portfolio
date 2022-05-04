import React from 'react';
import "./education.css";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import { MdSchool } from 'react-icons/md';
import { MdWork } from 'react-icons/md';
import { FaSchool } from 'react-icons/fa';

export default function Education() {
    return (
        <div className="box" id="education">
            <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2} animateOnce={true} initiallyVisible={true}>
                <span className="head">MY JOURNEY</span>
                <section className="container">
                    <div className="container_content">
                        <div className="row">
                            <div className="row_md_12">
                                <div className="timeline_centered">
                                    <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                        <article className="timeline_entry">
                                            <div className="timeline_icon timeline_icon_5" >
                                                <MdWork />
                                            </div>
                                            <div className="label">
                                                <h2 >Experience  <span>March(2022)-Present</span></h2>
                                                <p>I am currently working as <b>Web Developer</b> at <a target="_blank" href="https://www.startapps.in/"><b>StartApps</b></a> <i>(StartApp is a Web technology startup that is building tools and products)</i> and boosting my professional skills.</p>
                                            </div>
                                        </article>
                                    </ScrollAnimation>
                                    <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                        <article className="timeline_entry">
                                            <div className="timeline_icon" >
                                                <MdSchool />
                                            </div>
                                            <div className="label">
                                                <h2 >Undergraduation at Delhi University <span>2017-2020</span></h2>
                                                <p>I completed my undergraduation in CS (B.Sc. in Computer Science) from <a href='http://www.du.ac.in/'>University of Delhi</a> with overall 82.71%.</p>
                                            </div>
                                        </article>
                                    </ScrollAnimation>
                                    <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                        <article className="timeline_entry">
                                            <div className="timeline_icon timeline_icon_2" >
                                                <FaSchool />
                                            </div>
                                            <div className="label">
                                                <h2 >Higher Education  <span>2015-2017</span></h2>
                                                <p>I have completed my higher education from YSN M/Garhh major subjects as Physics,Chemistry & Maths with 90% merit in CBSE board. </p>
                                            </div>
                                        </article>
                                    </ScrollAnimation>

                                    <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                        <article>
                                            <div className="timeline_icon timeline_icon_4" >
                                                <MdWork />
                                            </div>
                                            <div className="label">
                                                <h2 >Internship</h2>
                                                <p>Completed two three month Internship in Data Analytics with RNA InTouch Solutions.</p>
                                            </div>
                                            <div className="timeline_entry_inner">
                                                <div className="timeline_icon_3 || color_none"></div></div>
                                        </article>
                                    </ScrollAnimation>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollAnimation>
        </div >

    )
}
