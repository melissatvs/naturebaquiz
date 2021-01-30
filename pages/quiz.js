import React from 'react';
import styled from 'styled-components';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizContainer from '../src/components/QuizContainer';

export default function QuizPage() {
  const q = 0; // para testar

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>

            <form>
              <img src={db.questions[q].image} alt="Minha Figura" title={db.questions[q].description} width="100%" />

              <p>{db.questions[q].title}</p>

              <input id="alternative1" type="radio" name="question" value="0" />
              <label htmlFor="alternative1">{db.questions[q].alternatives[0]}</label>

              <input id="alternative2" type="radio" name="question" value="1" />
              <label htmlFor="alternative2">{db.questions[q].alternatives[1]}</label>

              <input id="alternative3" type="radio" name="question" value="2" />
              <label htmlFor="alternative3">{db.questions[q].alternatives[2]}</label>

              <input id="alternative4" type="radio" name="question" value="3" />
              <label htmlFor="alternative4">{db.questions[q].alternatives[3]}</label>
            </form>

          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/melissatvs" />
    </QuizBackground>
  );
}
