import React from 'react';
import Link from 'next/link';

export const Navigation: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="container mx-auto">
      <nav>
        <ul className="flex gap-6 mb-10 py-6 border-b">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/todos">
              <a>Todos</a>
            </Link>
          </li>
        </ul>
      </nav>

      {children}
    </div>
  );
};
