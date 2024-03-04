import { getPlanetInfo } from "./fetchAPI.js";

// Hämtar API information till textsök.

export async function searchPlanets(searchString) {
    console.log(searchString)
    let planets = await getPlanetInfo();
    let lowerCaseSearchString = searchString.toLowerCase();


    return planets.bodies.find(body =>
        body.name.toLowerCase() === lowerCaseSearchString
    );
}