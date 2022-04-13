import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      {/* This is the header code */}
      <Header/>
      {/* Home Component */}
      <Home/>
    </div>
  );

}


export default App;
