import { Navigation } from '../Layout/Navigation';
import { NextPage } from 'next';
import { useState } from 'react';

const About: NextPage = () => {
  const [state, setState] = useState(0);
  return (
    <>
      <h1 className="font-bold text-xl">Hello About</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, fuga! Veritatis nihil
        alias quo fuga reprehenderit dolores saepe autem repudiandae!
      </p>

      <div className="flex gap-3">
        <button
          className="h-10 px-4 bg-red-500 text-white rounded mt-8"
          onClick={() => setState(0)}>
          Reset counter
        </button>
        <button
          className="h-10 px-4 bg-indigo-500 text-white rounded mt-8"
          onClick={() => setState((current) => current + 1)}>
          Count <b>{state}</b>
        </button>
      </div>
    </>
  );
};

export default About;
