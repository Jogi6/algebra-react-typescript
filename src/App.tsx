import { useState, useEffect } from "react";
import { ISpecie } from "./helpers/interfaces/ISpecie";
import { getSpecies } from "./services/species";

const App = () => {
    const initSpeciesState: Array<ISpecie> = [
      {
        name: '',
        designation: '',
        classification: '',
        language: '',
        people: [],
      }
    ];
    const [species, setSpecies] = useState(initSpeciesState);

    useEffect(() => {
      const species = getSpecies('Human', 'Droid', 'Wookie');
      species.then((data) => setSpecies(data));
      // setSpecies(species);

      // species
      //   ?.then((species: Array<ISpecie>) => setSpecies(species))
      //   .catch((error)=>(console.error(error)));
    
    }, [])
    
    return <></>;
};

export default App;
