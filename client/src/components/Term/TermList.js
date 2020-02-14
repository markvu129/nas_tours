import React, { Component } from "react";
import Collapsible from "react-collapsible";
import "./css/Term.css";

class TermList extends Component {
  constructor(props) {
    super(props);
  }

  renderQuestionList() {
    const questionsLists = [
      {
        question: "Who is Nas Tours?",
        answer:
          "We see ourselves as the future of edutainment tours. " +
          "Our aim is to engage travelers through compelling storytelling, " +
          "“behind-the-scenes” experiences and unfiltered conversations with our personality guides."
      },
      {
        question: "Why are we different from other tour companies?",
        answer:
          "In short, our tours will: ·\nAvoid boring, touristy content\n" +
          "·\nEngage in two-way conversations\n" +
          "·\nConnect with the local community.\n"
      },
      {
        question: "How are we linked to Nas Daily?",
        answer:
          "Nuseir Yassin (creator of Nas Daily) is the founder of Nas Tours. \n" +
          "Nas Tours is a subsidiary of The Nas Company."
      },
      {
        question: "Are we government-sponsored?",
        answer:
          "No. Nas Tours is privately owned. Content on the tour is solely created by the team with no political agenda or messages."
      },
      {
        question: "How do you reach out for enquires or feedbacks?",
        answer:
          "After each tour, we look forward to feedback on improving the quality of our tours." +
          "We also encourage honest assessments of our tours on travel review sites. For any enquiries, please write to us at info@nastours.sg."
      },
      {
        question: "What are the various tours you offer?",
        answer:
          "We offer 3 different small-group tours in Singapore. You can find more details of our tours here."
      },
      {
        question: "Are the tours currently only available in Singapore?",
        answer: "Yes. But we intend to expand to other countries in future :)"
      },
      {
        question: "Would I get to see Nas on the tours?",
        answer:
          "Unfortunately, not. But you will see some of the most awesome local tour guides, who will share their personal stories with you."
      },
      {
        question:
          "Can I take photos / videos and ask questions during the tour?",
        answer:
          "Absolutely! We want you to share your experiences with your loved ones. Asking questions is a great way for our guides and guests to interact and gain a deeper understanding of a topic. Just be mindful and respectful of different opinions when discussing sensitive topics."
      },
      {
        question: "What are the payment options?",
        answer:
          "We accept online payments via credit card (i.e. Visa, Master & AMEX) and bank transfers for offline bookings. Cash payment is not accepted unless otherwise arranged under special circumstances."
      },
      {
        question: "What is your tour cancellation policy?",
        answer:
          "You cancel booking within 1 day(s) of tour date, with 100% cancellation fee. Please note that any refund is also subject to deduction of expenses already incurred (e.g. transport reservation, admission tickets) and the decision of the company for refund is final.\n"
      },
      {
        question: "Do you conduct private tours?",
        answer:
          "Yes. If you are looking for a customized private tour, please write to us at info@nastours.sg."
      }
    ];

    const imgList = [
      "https://res.cloudinary.com/markvu129/image/upload/v1581693725/nastours/tour_guide_small_3_ljvf2c.png",
      "https://res.cloudinary.com/markvu129/image/upload/v1581693725/nastours/tour_guide_small_tptobf.png",
      "https://res.cloudinary.com/markvu129/image/upload/v1581693725/nastours/tour_guide_small_3_ljvf2c.png",
      "https://res.cloudinary.com/markvu129/image/upload/v1581693725/nastours/tour_guide_small_2_q7iyis.png"
    ];

    let renderedQuestionList;
    if (window.innerWidth > 800) {
      renderedQuestionList = questionsLists.map(q => (
        <Collapsible trigger={q.question} key={q.question}>
          <div
            data-v-fea2610c=""
            data-v-334c18a5=""
            className="c-text_bubble c-text_bubble-non_reversed"
          >
            <img
              data-v-fea2610c=""
              src={imgList[Math.floor(Math.random() * 3) + 1]}
              alt="tour-guide"
              className="c-text_bubble-image"
            />
            <p data-v-fea2610c="" className="c-text_bubble-description">
              <span
                data-v-fea2610c=""
                className="c-text_bubble-decorator"
              ></span>
              <span data-v-fea2610c="" className="answer">
                {q.answer}
              </span>
            </p>
          </div>
        </Collapsible>
      ));
    } else {
      renderedQuestionList = questionsLists.map(q => (
        <Collapsible trigger={q.question} key={q.question}>
          <p className="answer">{q.answer}</p>
        </Collapsible>
      ));
    }

    return renderedQuestionList;
  }

  render() {
    return (
      <div className="drop-down">
        <h1 className="tour-intro-title drop-down-title">
          Frequently Asked Questions
        </h1>
        <div>{this.renderQuestionList()}</div>
      </div>
    );
  }
}

export default TermList;
