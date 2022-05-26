import logo from './logo.svg';
import './App.css';
import Timer from"./components/Timer"

function App() {
  return (
    <div className="App">
      <Timer initial={0} end={60} timeinterval={1000}/>
    </div>
  );
}

export default App;
