class Weather {
    constructor(city) {
        this.apiKey = '3bfb616fec00c669c3de0c29c71bfec8';
        this.city = city;
    }

    // Feth weather from API
    async getWeather() {
        
        let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`);
        return response.data;
    }

    // Change weather location
    changeLocation(city) {
        this.city = city;
    }
}
