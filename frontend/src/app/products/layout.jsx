'use client';

import { client } from 'src/services';
import { Provider } from 'urql';

export default function ProductsLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Provider value={client}>{children}</Provider>
      </body>
    </html>
  );
}
