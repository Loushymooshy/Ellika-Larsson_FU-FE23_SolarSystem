import { getPlanetInfo } from "./fetchAPI.js";

export function planetEventListner() {
    let planets = document.querySelectorAll('.planet');

    planets.forEach(planet => {
        planet.addEventListener('click', async function(event) {
            let planetName = event.target.id;
        try {
            let planetInfo = await getPlanetInfo(planetName);
            console.log(planetInfo.bodies[1].name)
            document.getElementById('planet-name').innerText = planetInfo.name;
            document.getElementById('latin-name').innerText = 'test';
            document.getElementById('desc').innerText = 'test';
            document.getElementById('circumference').innerText = 'test';
            document.getElementById('sun-distance').innerText = 'test';

            // var maxTempElement = document.getElementById('maxTemp');
            // var minTempElement = document.getElementById('minTemp');
            // maxTempElement.innerText = "Max temp: " + temp.day;
            // minTempElement.innerText = "Min temp: " + temp.night;   

            // console.log(planetInfo);
        } catch (error) {
            console.error('något gick fel:', error); 
        }
        });
    });
};

