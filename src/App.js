import './App.css';
import { Details } from './components/Details';
import { Header } from './components/Header';

function App() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '80vh',
  };

  const borderStyle = {
    border: '2px solid #ccc',
    padding: '10px',
  };
  return (
    <div className='App' style={containerStyle}>
    <div style={borderStyle}>
      <Header/>
      <Details/>
    </div>
    </div>
  );
}

export default App;
