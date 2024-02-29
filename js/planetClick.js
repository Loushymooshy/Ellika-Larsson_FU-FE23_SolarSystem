import { getPlanetInfo } from "./fetchAPI";

let planets = document.querySelectorAll('.planet');

planets.forEach(planet => {
    planet.addEventListener('click', function(event) {
        let planetName = event.target.id;
        getPlanetInfo(planetName);
    });
});