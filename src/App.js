import logo from './logo.svg';
import './App.css';
import Profile from "./Profile";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";


function App() {

  const {isAuthenticated, isLoading} = useAuth0();



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
        {!isLoading && isAuthenticated ? 
          <>
            <LogoutButton/>
            <Profile/>
          </>
         : <><LoginButton/></>
        }
        
      </header>
    </div>
  );
}

export default App;
