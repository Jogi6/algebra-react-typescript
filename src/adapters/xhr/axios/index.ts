import Axios, { AxiosInstance } from "axios";
import { AXIOS_CONFIG } from "../../../helpers/constants/axiosConfig";
import { API_BASE_URL } from "../../../helpers/constants/swapiEndpoints";
import { ISpecie } from "../../../helpers/interfaces/ISpecie";

const getAxiosInstance = (): AxiosInstance => {
    return Axios.create(AXIOS_CONFIG);
};

export const getSpeciesResource = async (url: string) => {
    const species: Array<ISpecie> = [];

    const fillSpecies = (specie: ISpecie): void => {
        species.push(specie);
    };

    const response = await getAxiosInstance().get(url);

    console.log(response.data);
    for (const specie of response.data.results) {
        fillSpecies({
            name: specie.name,
            designation: specie.designation,
            classification: specie.classification,
            language: specie.language,
            people: specie.people,
        });
    }

    console.log(species);

    // const test = getAxiosInstance().get(url);
    // const test2 = fetch(API_BASE_URL + url); //treba resolveat i pretvorit iz jasona u ts
    // console.log(test);
    // console.log(test2);

    return species;
};
