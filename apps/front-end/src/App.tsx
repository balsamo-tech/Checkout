// From the most external to the closest.

import React from 'react';
import { LogIn } from './screens/Auth/LogIn';
import logo from './logo.svg';
import './App.css';

// Navigation
  // react-router
  // @reach/router https://github.com/reach/router


  // typescript sempre tem que adicionar o types das lib
    // i.e: yarn @reach/router @types/reach-router (?)

/*
  Challenge:
  - Create log in page.

    Use a navigation to navigate to the log in page as default.
    Once user logs in, he will get redirected to a Authenticated page. 

    Requirements
      - Use any navigation module.
      - Make UI for Log In. (Form of 2 inputs, email and password - Bonus: add validation to password and email)
      - Integrate Firebase into the app. (Together with Andrei)

*/

const App: React.FC = () => {
  return (
    <div className="App">
      <LogIn />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
