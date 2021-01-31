/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
import React from 'react';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizContainer from '../src/components/QuizContainer';
import Button from '../src/components/Button';

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>
      <Widget.Content>
        <div Style="display:flex;justify-content:center;align-items:center;width:288px;">
          <div Style="width:288px;">
            <svg
              version="1.1"
              id="L4"
              x="0px"
              y="0px"
              viewBox="0 0 100 100"
              enableBackground="new 0 0 0 0"
            >
              <circle fill="#fff" stroke="none" cx="6" cy="50" r="6">
                <animate
                  attributeName="opacity"
                  dur="1s"
                  values="0;1;0"
                  repeatCount="indefinite"
                  begin="0.1"
                />
              </circle>
              <circle fill="#fff" stroke="none" cx="26" cy="50" r="6">
                <animate
                  attributeName="opacity"
                  dur="1s"
                  values="0;1;0"
                  repeatCount="indefinite"
                  begin="0.2"
                />
              </circle>
              <circle fill="#fff" stroke="none" cx="46" cy="50" r="6">
                <animate
                  attributeName="opacity"
                  dur="1s"
                  values="0;1;0"
                  repeatCount="indefinite"
                  begin="0.3"
                />
              </circle>
            </svg>
          </div>
        </div>
      </Widget.Content>
    </Widget>
  );
}

function QuestionWidget({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
}) {
  return (
    <Widget>
      <Widget.Header>
        <h1>
          {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
        </h1>
      </Widget.Header>
      <img
        src={question.image}
        alt="Minha Figura"
        title={question.description}
        Style="width: 100%; height: 180px; object-fit: cover;"
      />
      <Widget.Content>
        <p>{question.title}</p>

        {/* <pre>
          {JSON.stringify(question.alternatives, null, 4)}
        </pre> */}

        <form
          onSubmit={(infosDoEvento) => {
            infosDoEvento.preventDefault();
            let answer = -1;

            const inputAnswer = document.querySelectorAll(`input[name="question__${questionIndex}"]:checked`)[0];

            if (typeof inputAnswer !== 'undefined') {
              answer = parseInt(inputAnswer.value, 10);
            }

            onSubmit(answer);
          }}
        >

          {question.alternatives.map((alternative, index) => (

            <Widget.Topic
              as="label"
              htmlFor={`alternative__${index}`}
            >
              <input
                key={alternative.id}
                // style={{ display: 'none' }}
                id={`alternative__${index}`}
                name={`question__${questionIndex}`}
                type="radio"
                value={index}
              />
              {alternative}
            </Widget.Topic>
          ))}

          <Button type="submit">
            Confirmar
          </Button>
        </form>

      </Widget.Content>
    </Widget>
  );
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

export default function QuizPage() {
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [currentAnswer, setCurrentAnswer] = React.useState();
  const [hits, setHits] = React.useState(0);
  const [wrongs, setWrongs] = React.useState(0);
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
    }, 1 * 1000);
  // nasce === didMount
  }, []);

  function handleSubmitQuiz(answer) {
    const nextQuestion = questionIndex + 1;

    if (answer < 0) {
      return;
    }

    if (answer === question.answer) {
      const newHits = hits + 1;
      setHits(newHits);
    } else {
      const newWrongs = wrongs + 1;
      setWrongs(newWrongs);
    }

    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <p>{`Acertos ${hits} x ${wrongs} Erros`}</p>
        {screenState === screenStates.LOADING && <LoadingWidget />}
        {screenState === screenStates.QUIZ
          && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
          />
          )}
        {screenState === screenStates.RESULT
          && (
            <Widget>
              <Widget.Header>
                Resultado
              </Widget.Header>
              <Widget.Content>
                <p>{`Você acertou ${hits} questões`}</p>
              </Widget.Content>
            </Widget>
          )}
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/melissatvs" />
    </QuizBackground>
  );
}
