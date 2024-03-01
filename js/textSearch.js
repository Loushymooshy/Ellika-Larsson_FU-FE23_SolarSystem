import { getPlanetInfo } from "./fetchAPI.js";

async function searchPlanets(searchString) {
let planets = await getPlanetInfo();

let lowerCaseSearchString = searchString.toLowerCase();

let matchingPlanets = planets.filter(planet => planet.name.toLowerCase().includes(lowerCaseSearchString));

return matchingPlanets;

}

searchPlanets("jup").then(matchingPlanets => {
    console.log(matchingPlanets); 
});