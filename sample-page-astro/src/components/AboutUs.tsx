import { useState } from 'react';

export const AboutUs = () => {
  const [state, setState] = useState(0);

  return (
    <div className="flex gap-3">
      <button className="h-10 px-4 bg-red-500 text-white rounded mt-8" onClick={() => setState(0)}>
        Reset counter
      </button>
      <button
        className="h-10 px-4 bg-indigo-500 text-white rounded mt-8"
        onClick={() => setState((current) => current + 1)}>
        Count <b>{state}</b>
      </button>
    </div>
  );
};
