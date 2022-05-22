import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root')!;
const root = createRoot(container);

const Main = () => {

  return(
    <React.StrictMode>
        <App />
    </React.StrictMode>
  )
}

root.render(
  <Main/>
);
