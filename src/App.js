import './App.css';
import Button from './components/Button/button';

function App() {
  const handleClickOne = () => {
    console.log('button 1 clicked')
  }

  const handleClickTwo = () => {
    console.log('button 2 clicked')
  }

  const handleClickThree = () => {
    alert('button 3 clicked')
  }

  return (
    <div className="App">
      <Button type="white" onClick={handleClickOne}>
        Button 1
      </Button>

      <Button type="black" onClick={handleClickTwo}>
        Button 2
      </Button>

      <Button onClick={handleClickThree}>
        Button 3
      </Button>
    </div>
  );
}

export default App;
