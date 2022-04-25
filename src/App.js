import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Home from './components/Home';
import About from './components/about';


function App() {
  return (
    <div className="App">
      {/* This is the header code */}
      <Header/>
      {/* Home Component */}
      <Home/>
      <About/>
    </div>
  );

}


export default App;
