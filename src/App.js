import logo from './logo.svg';
import './App.css';
import Data from './components/Operating';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Data/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Amit
        </a>
      </header>
    </div>
  );
}

export default App;
