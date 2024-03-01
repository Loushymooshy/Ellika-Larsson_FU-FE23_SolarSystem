import { getPlanetInfo } from "./fetchAPI.js";

export function planetEventListner() {
    let planets = document.querySelectorAll('.planet');

    planets.forEach(planet => {
        planet.addEventListener('click', async function(event) {
            let planetName = event.target.id;
        try {
            let planetInfo = await getPlanetInfo(planetName);
            let planetChosen = planetInfo.bodies.filter(x => x.name.toLowerCase() === planetName.toLowerCase());
            console.log(planetChosen)
            document.querySelector('#planet-name').innerText = planetChosen[0].name;
            document.querySelector('#latin-name').innerText = planetChosen[0].latinName;
            document.querySelector('#desc').innerText = planetChosen[0].desc;
            document.querySelector('#circumference').innerText = planetChosen[0].circumference;
            document.querySelector('#sun-distance').innerText = planetChosen[0].distance;

            let maxTempElement = document.querySelector('#maxTemp');
            let minTempElement = document.querySelector('#minTemp');
            maxTempElement.innerText = planetChosen[0].temp.day;
            minTempElement.innerText = planetChosen[0].temp.night;   
           

            const moonList = document.querySelector('#moon-list');
            moonList.innerHTML = '';
            planetChosen[0].moons.forEach(moon => {
                let moonItem = document.createElement('li');
                moonItem.setAttribute ('class','moon-block__list')
                moonItem.innerText = moon;
                moonList.appendChild(moonItem);

               window.scrollTo({top:0,left:100, behavior: "smooth"});
            });

            // console.log(planetInfo);
        } catch (error) {
            console.error('något gick fel:', error); 
        }
        });
    });
};

