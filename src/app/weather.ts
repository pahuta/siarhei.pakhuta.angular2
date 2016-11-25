export class Weather {
    static getWeather(coordinates: Coords.LatLng, citiesCount: number = 1): Promise<Weather.Cities> {
        let apiKey = '32a16d119fef9cb2372e11f8f29872ec';
        let url = `http://api.openweathermap.org/data/2.5/find?lat=${coordinates.latitude}
                                                              &lon=${coordinates.longitude}&cnt=${citiesCount}
                                                              &appid=${apiKey}`;

        return fetch(url)
            .then((response) => {
                if (response.status === 200) {
                    return response.json();
                }
            })
            .then((weatherData: Weather.Cities) => {
                return weatherData;
            });
    }
}
