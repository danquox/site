import React from 'react';
import ReactDOM from 'react-dom/client';
// renders
import App from './pages/App';
import Snow from "./pages/components/Snow"

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const snow = ReactDOM.createRoot(
  document.getElementById("snow-container") as HTMLElement
);
snow.render(
  <React.StrictMode>
    <Snow />
  </React.StrictMode>
)