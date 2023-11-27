// Entry point for the build script in your package.json
//import '@hotwired/turbo-rails';
import './controllers';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';

import Greeting from './React/src/component/Greetings';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : 'default-link')}
          to="/greetings"
        >
          Greetings
        </NavLink>
      </nav>
      <Routes>
        <Route
          path="greetings"
          element={<Greeting />}
        />
      </Routes>
      <p>test</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
);