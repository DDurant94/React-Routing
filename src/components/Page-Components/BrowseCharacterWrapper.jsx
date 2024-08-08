import { useParams, useNavigate } from "react-router-dom";
import CharacterDetails from "./DetailsPage";

function CharacterWrapper(){
  let params = useParams();
  let navigate = useNavigate();

  return <CharacterDetails params={params} navigate={navigate} />
}

export default CharacterWrapper;