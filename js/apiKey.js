 async function getApiKey() {
    try {
        const response = await fetch('https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/keys', {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'
        },
            body:JSON.stringify({
            })
        });
        
        const data = await response.json();
        const api_key = data.key;
        console.log(api_key);
        return api_key;
    }   catch (error) {
        console.error('error:', error);
    }

}

getApiKey();