import React from 'react';
import { BiHappy, BiSad } from 'react-icons/bi';
import Widget from '../../Widget';
import Button from '../../Button';
import AlternativesForm from '../AlternativesForm';

function QuestionWidget({
  question,
  questionIndex,
  totalQuestions,
  results,
  onSubmit,
  addResult,
}) {
  const [selectedAlternative, setSelectedAlternative] = React.useState(undefined);
  const [isQuestionSubmited, setIsQuestionSubmited] = React.useState(false);
  const isCorrect = selectedAlternative === question.answer;
  const questionId = `question__${questionIndex}`;
  const hasAlternativeSelected = selectedAlternative !== undefined;

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

        <AlternativesForm
          onSubmit={(e) => {
            e.preventDefault();

            setIsQuestionSubmited(true);
            setTimeout(() => {
              addResult(isCorrect);

              onSubmit();

              setIsQuestionSubmited(false);
              setSelectedAlternative(undefined);
            }, 1000);
          }}
        >

          {question.alternatives.map((alternative, index) => {
            const alternativeId = `alternative__${index}`;
            const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
            const isSelected = selectedAlternative === index;
            return (
              <Widget.Topic
                as="label"
                htmlFor={alternativeId}
                data-selected={isSelected}
                data-status={isQuestionSubmited && alternativeStatus}
              >
                <input
                  key={alternativeId}
                  style={{ display: 'none' }}
                  id={alternativeId}
                  name={questionId}
                  type="radio"
                  onChange={() => setSelectedAlternative(index)}
                />
                {alternative}
                {isQuestionSubmited && isSelected && (isCorrect ? <BiHappy style={{ verticalAlign: 'middle' }} /> : <BiSad style={{ verticalAlign: 'middle' }} />)}
              </Widget.Topic>

            );
          })}

          <Button
            type="submit"
            disabled={!hasAlternativeSelected}
          >
            Confirmar
          </Button>
        </AlternativesForm>

      </Widget.Content>
    </Widget>
  );
}

export default QuestionWidget;
