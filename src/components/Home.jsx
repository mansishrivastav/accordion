import "./Home.css";
import data from "../data.js";
import { useState } from "react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

const Home = () => {
  const [questions, setQuestions] = useState(data);

  const toggleInfo = (id) => {
    setQuestions((prevQuestions) => {
     return prevQuestions.map((question) => {
        if (question.id === id) {
          return { ...question, showInfo: !question.showInfo };
        }
        return question;
      });
    });
  };

  return (
    <div className="container">
      <div className="left">
        <h1>Questions And Answers</h1>
      </div>
      <div className="right">
        {questions.map((item) => (
          <div className="box" key={item.id}>
            <div className="sign">
              <h2>{item.title}</h2>
              <button onClick={() => toggleInfo(item.id)}>
                {item.showInfo ? (
                  <AiFillPlusCircle size={30} />
                ) : (
                  <AiFillMinusCircle size={30} />
                )}
              </button>
            </div>
            {item.showInfo && <p className="answer">{item.info}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
