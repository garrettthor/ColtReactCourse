import './App.css';
import Game from './Game';
import Rando from './Rando';
import Button from './Button.js';
import BrokenClick from './BrokenClick';
import StateClicker from './StateClicker';

function App() {
  return (
    <div className="App">
      {/* <Rando maxNum={99}/> */}
      {/* <Button /> */}
      {/* <BrokenClick /> */}

      <StateClicker />
    </div>
  );
}

export default App;