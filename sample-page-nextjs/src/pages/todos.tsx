import { NextPage } from 'next';
import React from 'react';
import { useEffect, useCallback, useState } from 'react';

const ListElement: React.FC<{ title: string }> = ({ title }) => (
  <li className="py-3 bg-gray-100 inline-block px-6">{title}</li>
);

const todos: NextPage = () => {
  const [data, setData] = useState([]);
  const getTodos = useCallback(async () => {
    try {
      const d = await fetch('https://jsonplaceholder.typicode.com/todos').then((res) => res.json());
      setData(d);
    } catch (error) {}
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
