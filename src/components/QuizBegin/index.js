import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';



function QuizBegin(props) {
  const router = useRouter();
  const [name, setName] = useState('');
  const [convite, setConvite] = useState('');

  return (
    <form onSubmit={function (e) {
      e.preventDefault();
      router.push(`/quiz?name=${name}`);
    }}
    >
      <input
        placeholder="Coloque seu nome aqui!"
        onChange={function (e) {
          setName(e.target.value);
          setConvite(e.target.value.length === 0 ? '' : `Vamos jogar, ${e.target.value}?`);
        }}
      />
      <button type="submit" title={convite} disabled={name.length === 0}>
        Jogar!
      </button>
    </form>
  );
}

export default QuizBegin;
