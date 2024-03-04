import { planetEventListner } from "./js/planetClick.js";
import {searchPlanets} from "./js/textSearch.js";
planetEventListner();

const searchinput = document.querySelector("#searchbar__input"); 
const formSearch = document.querySelector("#searchbar");

// eventlistener på textsök. Element fylls i. 

formSearch.addEventListener('submit', async function(event){
    event.preventDefault();
    let planet = await searchPlanets(searchinput.value);
    document.querySelector('#planet-name').innerText = planet.name;
    document.querySelector('#latin-name').innerText = planet.latinName;
    document.querySelector('#desc').innerText = planet.desc;
    document.querySelector('#circumference').innerText = planet.circumference;
    document.querySelector('#sun-distance').innerText = planet.distance;

    let maxTempElement = document.querySelector('#maxTemp');
    let minTempElement = document.querySelector('#minTemp');
    maxTempElement.innerText = planet.temp.day;
    minTempElement.innerText = planet.temp.night;   
   

    const moonList = document.querySelector('#moon-list');
    moonList.innerHTML = '';
    planet.moons.forEach(moon => {
        let moonItem = document.createElement('li');
        moonItem.setAttribute ('class','moon-block__list')
        moonItem.innerText = moon;
        moonList.appendChild(moonItem);

       
    });
// skrollar och ändrar färg på solen
    window.scrollTo({left: 0, top: document.body.scrollHeight, behavior: "smooth"});

    let sun = document.querySelector('.sun');
    sun.className = 'sun'
    sun.classList.add(`sun-${planet.name.toLowerCase()}`);
    searchinput.value = ""

})