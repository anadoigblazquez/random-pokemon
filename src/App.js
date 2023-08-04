import './App.css';
import PokeContextProvider from './contexts/PokeContextProvider';

function App() {

  return (
    <div className="App">
      <PokeContextProvider />
    </div>
  );
}

export default App;
