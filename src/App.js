import './App.css';
import { BrowserRouter as Router, Route ,Routes } from "react-router-dom";
import Home from './pages/Home/home';
import Header from './components/header/header';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
        <Header></Header>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home/>}></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
