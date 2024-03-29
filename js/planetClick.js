
// Lyssnar efter klick på planeterna. När du klickar på en planet så får du tillbaka planetens id. API informationen filtreras så vi får tllbaka informtaionen till rätt planet. Sedan fylls html elementen i med rätt information.

import { getPlanetInfo } from "./fetchAPI.js";

export function planetEventListner() {
    let planets = document.querySelectorAll('.planet');

    planets.forEach(planet => {
        planet.addEventListener('click', async function(event) {
            let planetName = event.target.id;
        try {
            let planetInfo = await getPlanetInfo(planetName);
            let planetChosen = planetInfo.bodies.filter(x => x.name.toLowerCase() === planetName.toLowerCase());
            document.querySelector('#planet-name').innerText = planetChosen[0].name;
            document.querySelector('#latin-name').innerText = planetChosen[0].latinName;
            document.querySelector('#desc').innerText = planetChosen[0].desc;
            document.querySelector('#circumference').innerText = planetChosen[0].circumference;
            document.querySelector('#sun-distance').innerText = planetChosen[0].distance;

            let maxTempElement = document.querySelector('#maxTemp');
            let minTempElement = document.querySelector('#minTemp');
            maxTempElement.innerText = planetChosen[0].temp.day;
            minTempElement.innerText = planetChosen[0].temp.night;   
           
// Fyller i månarna

            const moonList = document.querySelector('#moon-list');
            moonList.innerHTML = '';
            planetChosen[0].moons.forEach(moon => {
                let moonItem = document.createElement('li');
                moonItem.setAttribute ('class','moon-block__list')
                moonItem.innerText = moon;
                moonList.appendChild(moonItem);

               
            });
// På planet klick så skrollar sidan ner till botten av sidan

            window.scrollTo({left: 0, top: document.body.scrollHeight, behavior: "smooth"});
            
// Ändrar färg på solen
            let sun = document.querySelector('.sun');
            sun.className = 'sun'
            sun.classList.add(`sun-${planetName.toLowerCase()}`);
            

            // Fångar error
        } catch (error) {
            console.error('något gick fel:', error); 
        }
        });
    });
};

