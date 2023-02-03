'use client';
import { Provider, createClient } from 'urql';

const client = createClient({ url: 'http://localhost:1337/graphql' });

export default function ProductsLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Provider value={client}>{children}</Provider>
      </body>
    </html>
  );
}
