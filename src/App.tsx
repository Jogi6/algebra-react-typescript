import { useState, useEffect } from "react";
import { ISpecie } from "./helpers/interfaces/ISpecie";
import { getSpecies } from "./services/species";

const App = () => {
    const [species, setSpecies] = useState([]);

    useEffect(() => {
      const species: Array<ISpecie> = getSpecies();
    
    }, [])
    
    return <></>;
};

export default App;
