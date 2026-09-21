import './App.css';
import Header from './components/Header.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
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
