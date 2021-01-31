/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
import React from 'react';
import db from '../db.json';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizContainer from '../src/components/QuizContainer';
import QuestionWidget from '../src/components/QuizGame/Question';
import LoadingWidget from '../src/components/QuizGame/Loading';
import ResultWidget from '../src/components/QuizGame/Results';

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

export default function QuizPage() {
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [rights, setRights] = React.useState(0);
  const [wrongs, setWrongs] = React.useState(0);
  const [results, setResults] = React.useState([]);
  const questionIndex = currentQuestion;
  const totalQuestions = db.questions.length;
  const question = db.questions[questionIndex];

  // [React chama de: Efeitos || Effects]
  // React.useEffect
  // atualizado === willUpdate
  // morre === willUnmount
  React.useEffect(() => {
    // fetch() ...
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
      //setScreenState(screenStates.RESULT);
      
    }, 200);
  // nasce === didMount
  }, []);

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;

    // if (answer === question.answer) {
    //   const newHits = rights + 1;
    //   setRights(newHits);
    // } else {
    //   const newWrongs = wrongs + 1;
    //   setWrongs(newWrongs);
    // }

    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  function addResult(result) {
    setResults([
      ...results,
      result,
    ]);
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        {screenState === screenStates.LOADING && <LoadingWidget />}
        {screenState === screenStates.QUIZ
          && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            results={results}
            onSubmit={handleSubmitQuiz}
            addResult={addResult}
          />
          )}
        {screenState === screenStates.RESULT && <ResultWidget results={results} />}
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/melissatvs" />
    </QuizBackground>
  );
}
