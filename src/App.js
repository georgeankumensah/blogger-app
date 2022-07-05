import './App.css';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Pages/Hompage/HomePage';
import {Routes ,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <HomePage/>
      </header>
      <Routes>
        <Route exact path="/login"/>
      </Routes>
    </div>
  );
}

export default App;
