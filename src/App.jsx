import { Routes, Route } from "react-router-dom";
import HomePage from "./components/Page-Components/HomePage";
import CharacterList from "./components/Page-Components/BrowseCharactersPage";
import CharacterDetails from "./components/Page-Components/DetailsPage";
import Comics from "./components/Page-Components/ComicsPage";


function App() {

  return (
    <div id="app-container">
      <Routes>
        <Route path="/Home" element={<HomePage />}/>
        <Route path="/Character%Library" element={<CharacterList />}/>
        <Route path="/Character%Details" element={<CharacterDetails />}/>
        <Route path="/Comics" element={<Comics />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </div>
  )
}

export default App;
