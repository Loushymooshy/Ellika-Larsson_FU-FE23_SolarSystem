import { getPlanetInfo } from "./fetchAPI.js";

export async function searchPlanets(searchString) {

let planets = await getPlanetInfo();
let lowerCaseSearchString = searchString.toLowerCase();


return  planets.bodies.find(body =>
    body.name.toLowerCase().includes(lowerCaseSearchString));
}