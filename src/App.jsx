import { Routes, Route } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
import NotFound from "./components/Page-Components/ErrorPage";
import HomePage from "./components/Page-Components/HomePage";
import CharacterWrapper from "./components/Page-Components/BrowseCharacterWrapper"
import CharacterList from "./components/Page-Components/BrowseCharactersPage";
import Comics from "./components/Page-Components/ComicsPage";
import NavigationBar from './components/Page-Components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [characters,setCharacters] = useState([]);


  useEffect(() => {
    const fetchCharacters = async () => {
      try{
        const response = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?ts=1721929446898&apikey=6ff4859c9f07b04770921cd2eae2b91c&hash=7e91063979f9c9e893ef49c91351f283`);
        setCharacters(response.data.data.results);
      } catch(error){
        console.error('Error fetching characters:', error)
        return (
          <div>
            <p>{`Error fetching characters: ${error}`}</p>
          </div>
        )
      }
    };
    fetchCharacters();
  },[]);

  return (
    <div id="app-container" className="bg-dark-subtle">
      <NavigationBar />
      <Routes>
        <Route path="/Home" element={<HomePage />}/>
        <Route path="/CharacterLibrary" element={<CharacterList characters={characters}/>}/>
        <Route path="/CharacterDetails/:id" element={<CharacterWrapper />}/>
        <Route path="/Comics" element={<Comics />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </div>
  )
}

export default App;
