import React from 'react';
import Widget from '../../Widget';

function ResultWidget({
  results,
}) {
  return (
    <Widget>
      <Widget.Header>
        Resultados
      </Widget.Header>
      <Widget.Content>
        <h2>
          {`Você acertou ${results.filter(x => x).length} perguntas`}
        </h2>
        <ul>
          {results.map((result, i) => (
            <li key={`result__${0}`}>
              {`Pergunta ${i + 1}: ${result ? 'Acertou' : 'Errou'}`}
            </li>
          ))}
        </ul>
      </Widget.Content>
    </Widget>
  );
}

export default ResultWidget;
