import './App.css';
import {Route,Routes} from "react-router-dom";
import Home from "./pages/Home"
import Book from './pages/Book';
import { Movie } from '@mui/icons-material';
import Movies from "./pages/Movies";
import Characters from './pages/Characters';
import Character from "./pages/Character"

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Book/:book_id" element={<Book />}></Route>
        <Route path="/Movies" element={<Movies />}></Route>
        <Route path="/Movie/:movie_id" element={<Movie />}></Route>
        <Route path="/Characters" element={<Characters />}></Route>
        <Route path="/Characters/:char_id" element={<Character />}></Route>
      </Routes>
    </div>
  );
}

export default App;
