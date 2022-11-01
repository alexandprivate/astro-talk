import { NextPage } from 'next';
import React from 'react';
import { useEffect, useCallback, useState } from 'react';
import { ListElement } from '../components/ListElement';

const todos: NextPage = () => {
  const [data, setData] = useState([]);

  const getTodos = useCallback(async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const responseData = await response.json();
    setData(responseData);
  }, []);

  useEffect(() => {
    void getTodos();
  }, []);

  return (
    <ul className="flex flex-col gap-3">
      {data.map((i: any) => (
        <ListElement key={i.id} title={i.title} />
      ))}
    </ul>
  );
};

export default todos;
