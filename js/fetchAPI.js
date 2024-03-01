import { getApiKey } from "./apiKey.js"; 
export async function getPlanetInfo(planetName){
   // let cachedData = JSON.parse(window.localStorage.getItem("planets"));
   // if(cachedData){
   //     return cachedData.filter(x => x.name.toLowerCase() === planetName.toLowerCase());
   // }

    let apiKey = await getApiKey();
    try { 
        const response = await fetch('https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies', {
            method: 'GET',
            headers: {'Content-Type': 'application/json','x-zocom': `${apiKey}`}
        });
        const data = await response.json();
        //window.localStorage.setItem("planets", JSON.stringify(data.bodies))
        return data;
       // return data.bodies.filter(x => x.name.toLowerCase() === planetName.toLowerCase());
    }
    catch (error) {
        console.error('error:', error);
    }
}
getPlanetInfo();

