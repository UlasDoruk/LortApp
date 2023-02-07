import './App.css';
import {Route,Routes} from "react-router-dom";
import Home from "./pages/Home"
import Book from './pages/Book';
import Movie from './pages/Movie';
import Characters from './pages/Characters';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Book" element={<Book />}></Route>
        <Route path="/Movie" element={<Movie />}></Route>
        <Route path="/Characters" element={<Characters />}></Route>
      </Routes>
    </div>
  );
}

export default App;
