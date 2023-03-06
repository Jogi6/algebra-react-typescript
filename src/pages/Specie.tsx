import Navbar from '../components/Navbar';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ISpecie } from "../helpers/interfaces/ISpecie";
import { VEHICLES } from "../helpers/constants/swapiEndpoints";
import { getUser } from "../services/species";

const Specie = ({ species }: any) => {
    const [specie, setSpecie] = useState({});

    const params = useParams();

    useEffect(() => {
        if (species.lenght >= 1 && species[0].name) {
            const specieObj: ISpecie = species.find(
                ({ name }: ISpecie) =>
                    name.toLocaleLowerCase() === params.specieName
            );
            
            console.log(specieObj);
    
            const userURL: string = specieObj.people[0] ?? '';
            const vehiclesURL: string = getVehiclesURL(specieObj);
    
            if (userURL && vehiclesURL) {
                // getUseAndVehiclesData( userURL, vehiclesURL );
            }else if(userURL){
                getUserData( userURL );
            }
    
            setSpecie(specie);
        }
    }, [params]);

    const getVehiclesURL = (specie: ISpecie): string =>{
        switch (specie.name) {
            case 'Human':
                return VEHICLES
            case 'Droid':
                return VEHICLES + '?Search=droid'
            default:
                return '';
        }
    };

    const getUserData = (userURL: string) =>{
        const user = getUser(userURL);

        user.then((resulte) => {
            
        }).catch().finally();
    };

    return <><Navbar species={species} specieName={params.specieName} /></>;
};

export default Specie;
