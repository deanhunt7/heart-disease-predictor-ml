import React, { useState } from "react";
// App
// I want to make a question components where I can send the answers through json to the backend
// input is going to be integers and booleans
// going to need validation for the numbers

function Question(props) {
  // type of answer (integer, boolean)
  // question going to be a string
  // if integer, then validate whether it is valid
  // if boolean, then have a true and false button
  // pass state to the parent
  // each question will have an answer
  // you're alowed to submit the form
  const [answer, setAnswer] = useState("unanswered");

  if (props.answerType === "integer") {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="col-6 pb-3 pt-3">
          <div className="row">
            <div className="card text-center">
              <div className="card-body">
                <div className="card-text pb-3 pt-3">
                  <h3>{props.questionText}</h3>
                  <br />
                  <input
                    type="number"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}> {/*added inline css styling, flex is basically any element, but it is much more customizable in terms
      of placement, so it was nice in this case to just be able to place it in the middle. JustifyContent is self-explanatory*/}
        <div className="col-6 pt-3 pb-3"> {/*Basically there are 12 columns on a webpage for react, so I just said that I want my card to take up 6 of these 12. That means there
        are 3 empty columns on each side since we justified it to the middle.*/}
          <div className="row"> {/* added a row next */}
            <div className="card text-center">
              <div className="card-body">
                <div className="card-text pt-3">
                  <h3>{props.questionText}</h3>
                  <br />
                  <div className="row pb-3"> 
                    <div className="col-6">
                      <div>
                        <input
                          type="radio"
                          name={props.questionText}
                          value={false}
                          checked="false"
                          onChange={(e) => setAnswer(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="pr-3">
                        <input
                          type="radio"
                          name={props.questionText}
                          value={false}
                          checked="fale"
                          onChange={(e) => setAnswer(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function SubmitButton(){
  var getSubmit = () => {
    console.log("pls submit");
  }
  return(
        <button onClick={getSubmit}>Submit</button>
        // <button onClick={checked ? SubmitEvent() : SubmitEvent()}>Submit</button>
  )
}
export default function App() {
  // Make questions with types
  const questions = [
    {
      questionText: "What is the capital of France?",
      answerType: "integer",
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerType: "boolean",
    },
    {
      questionText: "Who is CEO of Amazon?",
      answerType: "boolean",
    },
    {
      questionText: "Who is CEO of UTD?",
      answerType: "integer",
    },
  ];
  const [answer1, setQuestionsAnswered1] = useState("unanswered");
  const [answer2, setQuestionsAnswered2] = useState("unanswered");
  const [answer3, setQuestionsAnswered3] = useState("unanswered");
  const [answer4, setQuestionsAnswered4] = useState("unanswered");
  var checked = () => {
    if (
      answer1 === "unanswered" ||
      answer2 === "unanswered" ||
      answer3 === "unanswered" ||
      answer4 === "unanswered"
    ) {
      return false;
    }
  }

    // this returns an array of question components
    return (
      <div className="app">
        <Question
          answer={answer1}
          questionText={questions[0].questionText}
          answerType={questions[0].answerType}
        />
        <Question
          answer={answer2}
          questionText={questions[1].questionText}
          answerType={questions[1].answerType}
        />
        <Question
          answer={answer3}
          questionText={questions[2].questionText}
          answerType={questions[2].answerType}
        />
        <Question
          answer={answer4}
          questionText={questions[3].questionText}
          answerType={questions[3].answerType}
        />
        <SubmitButton
        />
      </div>
    );
}
