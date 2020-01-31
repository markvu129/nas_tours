import React, { Component } from "react";
import "./css/Testimonial.css";

class Testimonial extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="p-main-perks_block">
        <h1>Meet your tour guide</h1>

        <div className="testimonial-container">
          <div className="testimonial-div">
            <img
              className="testimonial-img"
              src="/assets/img/images/tat_yam.png"
              alt="nas"
              border="0"
            />
            <h3 className="testimonial-title">Tat Yam</h3>
            <p className="testimonial-tag">
              On this tour, we will show you how this{" "}
              <span className="testimonial-highlight">country</span> made all
              races and religions live in peace together. We will visit ethnic
              quarters and connect with people of{" "}
              <span className="testimonial-highlight">different</span> races and
              faiths and it’s what makes Singapore unique and unforgettable.
              <br />
            </p>
          </div>
        </div>

        <ul className="p-main-perks_block-quotes" data-v-032cbaaa="">
          <li data-v-032cbaaa="">
            <div
              className="c-text_bubble c-text_bubble-non_reversed"
              data-v-6275ac14=""
              data-v-032cbaaa=""
            >
              <img
                src="https://svgshare.com/i/HA0.svg"
                alt="tripadvisor review"
                className="c-text_bubble-image"
                data-v-6275ac14=""
              />
              <p
                data-aos="fade-zoom-in"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600"
                className="c-text_bubble-description aos-init aos-animate"
                data-v-6275ac14=""
              >
                <span
                  className="c-text_bubble-decorator"
                  data-v-6275ac14=""
                ></span>{" "}
                <span data-v-6275ac14="">
                  “The tour is interesting and takes you off the beaten track,
                  even myself as a Singaporean haven’t been to some of the
                  places included in the tour. Guide Jan is amazing and very
                  detailed.”
                </span>
                <br />
                <span className="c-text_bubble-decorator-right">
                  See review on{" "}
                  <a
                    href="https://www.tripadvisor.com.sg/Attraction_Review-g294265-d19699980-Reviews-Nas_Tours-Singapore.html"
                    target="_blank"
                  >
                    <i
                      style={{ color: "#0089e9", textDecoration: "underline" }}
                    >
                      Trip Advisor
                    </i>
                  </a>
                </span>
              </p>
            </div>
          </li>
          <li data-v-032cbaaa="">
            <div
              className="c-text_bubble c-text_bubble-reversed"
              data-v-6275ac14=""
              data-v-032cbaaa=""
            >
              <img
                src="https://svgshare.com/i/HA0.svg"
                alt="tripadvisor review"
                className="c-text_bubble-image"
                data-v-6275ac14=""
              />
              <p
                data-aos="fade-zoom-in"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600"
                className="c-text_bubble-description aos-init aos-animate"
                data-v-6275ac14=""
              >
                <span
                  className="c-text_bubble-decorator"
                  data-v-6275ac14=""
                ></span>{" "}
                <span data-v-6275ac14="">
                  “This tour has allowed me to further understand the racial and
                  religious harmony in this amazing small country. We learn to
                  not just cope but live and respect each other race and
                  culture. Many things to learn even for the locals, from
                  differences between south and north temples to etiquette and
                  practices for mosque and church.”
                </span>
                <br />
                <span className="c-text_bubble-decorator-right">
                  See review on{" "}
                  <a
                    href="https://www.tripadvisor.com.sg/Attraction_Review-g294265-d19699980-Reviews-Nas_Tours-Singapore.html"
                    target="_blank"
                  >
                    <i
                      style={{ color: "#0089e9", textDecoration: "underline" }}
                    >
                      Trip Advisor
                    </i>
                  </a>
                </span>
              </p>
            </div>
          </li>
          <li data-v-032cbaaa="">
            <div
              className="c-text_bubble c-text_bubble-non_reversed"
              data-v-6275ac14=""
              data-v-032cbaaa=""
            >
              <img
                src="https://svgshare.com/i/HA0.svg"
                alt="tripadvisor review"
                className="c-text_bubble-image"
                data-v-6275ac14=""
              />
              <p
                data-aos="fade-zoom-in"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600"
                className="c-text_bubble-description aos-init aos-animate"
                data-v-6275ac14=""
              >
                <span
                  className="c-text_bubble-decorator"
                  data-v-6275ac14=""
                ></span>{" "}
                <span data-v-6275ac14="">
                  “What a fascinating tour with an incredibly knowledgeable
                  guide! Yap did a brilliant job of explaining the different
                  religions and how people of different religions integrate. I
                  learnt way more than I expected and it was interesting from
                  beginning to end. The tour has a very personal touch as well,
                  with the opportunity to look inside the different places of
                  worships (sikh temple, mosque etc) and hear a local’s
                  perspective. Highly recommend this tour!”
                </span>
                <br />
                <span className="c-text_bubble-decorator-right">
                  See review on{" "}
                  <a
                    href="https://www.tripadvisor.com.sg/Attraction_Review-g294265-d19699980-Reviews-Nas_Tours-Singapore.html"
                    target="_blank"
                  >
                    <i
                      style={{ color: "#0089e9", textDecoration: "underline" }}
                    >
                      Trip Advisor
                    </i>
                  </a>
                </span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Testimonial;
