import React from "react";
import "../home-desktop-styles/FAQsection.css";
import "../home-laptop-styles/FAQsection.css";
import "../home-phone-styles/FAQsection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function FAQsection() {
  const questionsData = [
    {
      id: 1,
      question: "Can I enroll in multiple courses at once?",
      answer:
        "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
      open: true,
    },
    {
      id: 2,
      question: "What kind of support can I expect from instructors?",
      answer:
        "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
      open: false,
    },
    {
      id: 3,
      question:
        "Are the courses self-paced or do they have specific start and end dates?",
      answer:
        "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
      open: false,
    },
    {
      id: 4,
      question: "Can I download the course materials for offline access?",
      answer:
        "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
      open: false,
    },
    {
      id: 5,
      question: "Can I download the course materials for offline access?",
      answer:
        "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
      open: false,
    },
  ];

  const [showAnswer, setShowAnswer] = React.useState(questionsData);

  function openAnswer(id) {
    setShowAnswer((prev) =>
      prev.map((ele) => (ele.open ? { ...ele, open: !ele.open } : ele))
    );
    setShowAnswer((prev) =>
      prev.map((ele) => (ele.id === id ? { ...ele, open: !ele.open } : ele))
    );
  }

  function closeAnswer() {
    setShowAnswer((prev) =>
      prev.map((ele) => (ele.open ? { ...ele, open: !ele.open } : ele))
    );
  }

  const questions = showAnswer.map((ele) => {
    return (
      <div
        key={ele.id}
        className={`most-asked-question-container ${
          ele.open ? "most-asked-question-container-active" : null
        }`}
      >
        <div>
          <p>{ele.question}</p>
          {!ele.open ? (
            <div
              className="close-and-open-answer cursor-pointer"
              onClick={() => openAnswer(ele.id)}
            >
              <FontAwesomeIcon icon={faPlus} />
            </div>
          ) : (
            <div
              className="close-and-open-answer cursor-pointer"
              onClick={closeAnswer}
            >
              <FontAwesomeIcon icon={faX} />
            </div>
          )}
        </div>
        {ele.open ? (
          <div className="answer-container">
            <p>{ele.answer}</p>
          </div>
        ) : null}
        {ele.open ? (
          <div className="different-courses">
            <p>Enrollment Process for Different Courses</p>
            <div className="arrew-for-different-courses cursor-pointer">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        ) : null}
      </div>
    );
  });

  return (
    <div className="FAQ-section-container">
      <div>
        <div className="FAQ-support">
          <div>
            <p>Frequently Asked Questions</p>
            <p>
              Still you have any questions? Contact our Team via
              support@skillbridge.com
            </p>
          </div>
          <button>See All FAQ’s</button>
        </div>
        <div className="most-asked-container">{questions}</div>
      </div>
    </div>
  );
}

export default FAQsection;
