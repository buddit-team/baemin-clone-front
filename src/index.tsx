import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './theme/globalStyle';

import { ThemeProvider } from 'styled-components';
import variables from './theme/variables';
import './theme/font.css';
import './theme/tailwind.css';
import "./theme/tailwind.generated.css";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <>
    <GlobalStyle />
    <React.StrictMode>
      <ThemeProvider theme={variables}>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
