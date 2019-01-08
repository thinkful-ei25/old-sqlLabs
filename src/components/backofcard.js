'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import requiresLogin from './requires-login';
// TODO: import fetch after creating it.



export class BackOfCard extends React.Component {
  componentDidMount() {
    //dispatch the fetch
    this.props.dispatch();
  }

  createBackOfCard(){
    const {userAnswer, currentQuestion, numCorrect, numIncorrect, currentAnswer} = this.props;
    // const {correctAnswer } = this.props.currentQuestion.Answer;
    const 
    if(userAnswer === currentAnswer) {
      return (
        <div className="card with_shadow card_correct">
          <div className="arrow_box">
            <h2>CORRECT!</h2>
            <p>The correct answer is: {currentAnswer}</p>
            <p>Your lifetime score on this question is: {numCorrect}/{numIncorrect}</p>
          </div>
          <div>
            <p>Keep up the great work!</p>
            <Link to="/frontofcard"><button>Next Question</button></Link>
          </div>
        </div>
      )
    } else if (userAnswer != correctAnswer) {
      return (
        <div className="card with_shadow card_incorrect">
          <div className="arrow_box">
            <h2>Wrong....</h2>
            <p>The correct answer is: {correctAnswer}</p>
            <p>Your lifetime score on this question is: {numCorrect}/{numIncorrect}</p>
          </div>
          <div>
            <p>Keep up the great work!</p>
            <Link to="/frontofcard"><button>Next Question</button></Link>
          </div>
        </div>
      )
    }

  }

  //displays the card after loading
  rerender(){
    return <div className="x">{this.createBackOfCard()}</div>
  }

  render() {
    if(this.props.loading){
      return <h2>Loading...</h2>
    } else {
      return this.rerender();
    }
  }
}



const mapStateToProps = (state, props) => {
  const currentQuestionID = props.currentQuestion;
  return ({
    currentQuestion = state.rootReducer.currentQuestionID.question,
    currentAnswer = state.rooterReducer.currentQuestionID.answer,
    numCorrect: state.rootReducer.currentQuestionID.correct,
    numIncorrect: state.rootReducer.currentQuestionID.incorrect
  });
};

export default requiresLogin()(connect(mapStateToProps)(BackOfCard));




// let backOfCard = '';
// if (correct) {
//   backOfCard = `
//   <div>
//     //create back of card display and text
//   </div>
// } else {
//   backOfCard = `
//     //create back of card display
//     `
// }


// render (
//   <div>
//   {backOfCard}
//   </div>

// )
// }