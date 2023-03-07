import { getSpeciesResource, getResource } from "../adapters/xhr/axios";
import { SPECIES } from "../helpers/constants/swapiEndpoints";
import { ISpecie } from "../helpers/interfaces/ISpecie";

export const getSpecies = async (...specieNames: Array<string>) => {
    let response: Array<ISpecie> = [];
    try {
        if (specieNames.length == 0) {
            const promise = await getSpeciesResource(SPECIES);
            response = response.concat(promise);
        } else {
            for (const name of specieNames) {
                const promise = await getSpeciesResource(
                    `${SPECIES}?search=${name.toLocaleLowerCase()}`
                );
                response = response.concat(promise);
            }
        }
    } catch (error) {
        console.error(error);
    }

    return response;
};

export const getUser = async (url: string) => {
    if (!url) {
        return;
    }

    try {
        return await getResource(url);
    } catch (error) {}
};

export const getVehicles = async (url: string) => {
    if (!url) {
        return;
    }

    try {
        return await getResource(url);
    } catch (error) {}
};
