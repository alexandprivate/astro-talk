import React from 'react';

export const ListElement: React.FC<{ title: string }> = ({ title }) => (
  <li className="py-3 bg-gray-100 inline-block px-6">{title}</li>
);
