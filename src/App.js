import HomePage from "./pages/AnimeList/HomePage";
import {Routes, Route} from "react-router-dom";
import Details from "./pages/AnimeDetails/Details"
function App() {
  return (
    <div>
       <Routes>
          <Route path="/" element= {<HomePage />} />
          <Route path="/movie/:id" element= {<Details />} />
       </Routes>
       
    </div>
  );
}

export default App;
