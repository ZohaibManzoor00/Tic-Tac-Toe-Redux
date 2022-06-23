import './App.css';
import TicTacToe from './tic-tac-toe/Tic-Tac-Toe';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
       <h1 style={{color: '#00d8ff'}}>Tic Tac Toe</h1>
        <TicTacToe />
      </header>
    </div>
  );
}

export default App;
