import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Button from '../Button';
import Input from '../Input';

function QuizBegin() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [convite, setConvite] = useState('');

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      router.push(`/quiz?name=${name}`);
    }}
    >
      <Input
        name="nomeUsuario"
        placeholder="Coloque seu nome aqui!"
        onChange={(e) => {
          setName(e.target.value);
          setConvite(e.target.value.length === 0 ? '' : `Vamos jogar, ${e.target.value}?`);
        }}
        value={name}
      />

      <Button type="submit" title={convite} disabled={name.length === 0}>
        Jogar!
      </Button>
    </form>
  );
}

export default QuizBegin;
