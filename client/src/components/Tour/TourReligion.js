import React, {Component} from "react";
import "./css/TourReligion.css";
import "../Main/css/Home.css";
import "./Testimonial";
import Testimonial from "./Testimonial";
import ImageSlider from "./Slider";
import ExploreMore from "./ExploreMore";
import ScrollAnimation from 'react-animate-on-scroll';

class TourReligion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
    }

    componentWillMount() {
        this.fadeIn = setTimeout(() => this.setState({visible: true}), 100);
    }

    componentWillUnmount() {
        clearTimeout(this.fadeIn);
    }

    render() {
        return (
            <div
                className={
                    this.state.visible ? "tour-religion fade-in" : "tour-religion"
                }
            >
                <div data-v-4dcd448f="" className="tour-intro">
                    <ImageSlider/>
                    <ScrollAnimation animateIn="fadeIn" offSet={10} delay={500} initiallyVisible={false}>
                        <div data-v-4dcd448f="" className="p-tour-description testimonial">
                        <h1 data-v-4dcd448f="">The Race & Religion Tour</h1>
                        <ul className="p-tour-description-list">
                            <li className="p-tour-description-l">
                                <div className="p-tour-description-div">
                                    <img src="https://i.ibb.co/fG5s93n/image-0.png"/>
                                    <h3 className="p-tour-description-title">SCHEDULE</h3>
                                    <hr className="p-tour-description-divider"/>
                                    <p className="p-tour-description-p">MON TO SAT</p>
                                    <p className="p-tour-description-p p-tour-annotation">
                                        (9AM - 11AM)
                                    </p>
                                </div>
                            </li>
                            <li className="p-tour-description-l">
                                <div className="p-tour-description-div">
                                    <img src="https://i.ibb.co/fG5s93n/image-0.png"/>
                                    <h3 className="p-tour-description-title">DURATION</h3>
                                    <hr className="p-tour-description-divider"/>
                                    <p className="p-tour-description-p">2.0 HOURS</p>
                                    <p className="p-tour-description-p p-tour-annotation">
                                        Subject to traffic conditions
                                    </p>
                                </div>
                            </li>
                            <li className="p-tour-description-l">
                                <div className="p-tour-description-div">
                                    <img src="https://i.ibb.co/fG5s93n/image-0.png"/>
                                    <h3 className="p-tour-description-title">TICKETING</h3>
                                    <hr className="p-tour-description-divider"/>
                                    <p className="p-tour-description-p">
                                        Adult: S$35 <br/>
                                        Child: S$20
                                    </p>
                                    <p className="p-tour-description-p p-tour-annotation">
                                        (6 - 12 years old)
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    </ScrollAnimation>
                </div>
                <ScrollAnimation animateIn="fadeIn" offSet={10} delay={500} initiallyVisible={false}>
                    <div data-v-4dcd448f="" className="p-tour-video_description">
                        <section
                            data-v-1674a463=""
                            data-v-4dcd448f=""
                            className="p-tour-video_block"
                        >
                            <div data-v-1674a463="" className="p-tour-video_block-iframe_wrap">
                                <iframe
                                    data-v-1674a463=""
                                    src="https://www.youtube.com/embed/RMgKk2NVpPQ"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen="allowfullscreen"
                                ></iframe>
                            </div>
                            <img
                                data-v-1674a463=""
                                src="https://i.ibb.co/ZVvywSV/f52fbedf4ce7f378fa8c98197d59580c.png"
                                alt=""
                                className="p-tour-video_block-car"
                            />
                        </section>
                    </div>

                    <div data-v-4dcd448f="" className="p-tour-timeline-block">
                        <div data-v-4dcd448f="" className="p-tour-timeline">
                            <div data-v-4dcd448f="" className="p-tour-timeline-wrap">
                                <img
                                    data-v-4dcd448f=""
                                    src="https://svgshare.com/i/H96.svg"
                                    alt=""
                                    className="p-tour-timeline-image"
                                />
                                <div data-v-4dcd448f="" className="p-tour-timeline-line"></div>
                            </div>
                            <div data-v-4dcd448f="" className="p-tour-timeline-text">
                                <p data-v-4dcd448f="">
                                    Little India MRT Station - Exit E (Street Level)
                                </p>
                            </div>
                            <div data-v-4dcd448f="" className="p-tour-timeline-text">
                                <p data-v-4dcd448f="">Little India</p>
                            </div>
                            <div data-v-4dcd448f="" className="p-tour-timeline-text">
                                <p data-v-4dcd448f="">Kampong Glam</p>
                            </div>
                            <div data-v-4dcd448f="" className="p-tour-timeline-text">
                                <p data-v-4dcd448f="">City Hall / Waterloo Street</p>
                            </div>
                            <div data-v-4dcd448f="" className="p-tour-timeline-text">
                                <p data-v-4dcd448f="">Chinatown</p>
                            </div>
                            <div data-v-4dcd448f="" className="p-tour-timeline-text">
                                <p data-v-4dcd448f="">Harmony in Diversity Gallery</p>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" offSet={10} delay={500} initiallyVisible={false}>
                    <Testimonial/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" offSet={10} delay={500} initiallyVisible={false}>
                    <ExploreMore/>

                <img
                    className="tour-checkout-wrap"
                    src="https://i.ibb.co/dfPmKtY/background-singapore.png"
                    alt="background-singapore"
                    border="0"
                />
                </ScrollAnimation>
            </div>
        );
    }
}

export default TourReligion;
