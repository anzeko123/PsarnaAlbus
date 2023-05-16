import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';

window.unmount = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};


window.render = (containerId, history) => {
  ReactDOM.render(
    <App history={history} />,
    document.getElementById(containerId),
  );
  reportWebVitals();
};

window.unmount = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

if (!document.getElementById('Render-container')) {
  const root = ReactDOM.createRoot(document.getElementById("root"));
    reportWebVitals();
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  reportWebVitals();
}
