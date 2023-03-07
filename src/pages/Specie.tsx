import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ISpecie } from "../helpers/interfaces/ISpecie";
import { VEHICLES } from "../helpers/constants/swapiEndpoints";
import { getUser, getVehicles } from "../services/species";
import Table from '../components/Spicies/Table';

const Specie = ({ species }: any) => {
    const [specie, setSpecie] = useState({});
    const [username, setUsername] = useState('');
    const [isLoad, setIsLoad] = useState(false);
    const [vehicles, setVehicles] = useState([]);

    const params = useParams();

    useEffect(() => {
        setIsLoad(false);

        if (species.length >= 1 && species[0].name) {
            const specieObj: ISpecie = species.find(
                ({ name }: ISpecie) =>
                    name.toLocaleLowerCase() === params.specieName
            );

            const userUrl: string = specieObj.people[0] ?? '';
            const vehiclesURL: string = getVehiclesURL(specieObj);

            if (userUrl && vehiclesURL) {
                getUseAndVehiclesData( userUrl, vehiclesURL );
            } else if (userUrl) {
                getUserData(userUrl);
            }

            setSpecie(specie);
        }
    }, [params]);

    const getVehiclesURL = (specie: ISpecie): string => {
        switch (specie.name) {
            case 'Human':
                return VEHICLES
            case 'Droid':
                return VEHICLES + '?Search=droid'
            default:
                return '';
        }
    };

    const getUseAndVehiclesData = (userUrl:string, vehiclesURL:string) => {
        const data = Promise.all([getUser(userUrl), getVehicles(vehiclesURL)]);
        data.then((result)=>{
            setUsername(result[0]?.data.name)
            setVehicles(result[1]?.data.results)
        }).catch((error) => {
            console.error('Red Alert! Shields up!')
        }).finally(() =>{setIsLoad(true)});
    };

    const getUserData = (userUrl: string) => {
        const user = getUser(userUrl);

        user.then((resulte) => {
            setUsername(resulte?.data.name);
        }).catch((error) => {
            console.error('Red Alert! Shields up!')
        }).finally(() =>{setIsLoad(true)});
    };

    return <>
            <Table 
                isLoad={isLoad}
                species={species}
                speciesName={params.specieName} 
                userName={username} 
                vehicles={vehicles}
            />
        </>;
};

export default Specie;
