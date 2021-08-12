import './App.css';
import Lottery from './Lottery';

function App() {
  return (
    <div className="App">
      <Lottery title="Lotto"/>
      <Lottery title="Mini Daily" numBalls="4" maxNum="10" />
    </div>
  );
}

export default App;
