import './App.css';

function App() {
  // no logo on site in order to make chatter app look cleaner
  return (
    <div className="App">
      <header className="header">
        <span className="title">CHATTER APP</span>
      </header>
      <footer className="footer">
        <input className="text-input"/>
        <button className="send-button">↑</button>
      </footer>
    </div>
  );
}

export default App;
