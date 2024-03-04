
// Hämtar information från API om planeterna. API nyckeln importeras från en annan modul och används för att kunna få tillgång till API.

import { getApiKey } from "./apiKey.js"; 
export async function getPlanetInfo(planetName){
 

    let apiKey = await getApiKey();
    try { 
        const response = await fetch('https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies', {
            method: 'GET',
            headers: {'Content-Type': 'application/json','x-zocom': `${apiKey}`}
        });
        const data = await response.json();
        
        return data;
       
    }
    catch (error) {
        console.error('error:', error);
    }
}
getPlanetInfo();

