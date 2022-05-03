import './App.css';
import Button from './components/Button/button';

function App() {
  const handleClickOne = () => {
    console.log('button 1 clicked')
  }

  const handleClickTwo = () => {
    console.log('button 2 clicked')
  }

  return (
    <div className="App">
      <Button onClick={handleClickOne}>
        Button 1
      </Button>

      <Button onClick={handleClickTwo}>
        Button 2
      </Button>
    </div>
  );
}

export default App;
