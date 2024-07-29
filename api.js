async function getWeatherData(location) {
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${encodeURIComponent(location)}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '1aa7d33eb1msh8b8fed92f086d8dp167936jsn4bb761e39e9e',
            'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json(); 
        console.log(JSON.stringify(result, null, 4)); 
    } catch (error) {
        console.error(error);
    }
}


getWeatherData('Mumbai');
