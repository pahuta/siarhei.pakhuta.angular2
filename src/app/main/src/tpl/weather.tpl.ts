export const template: string = `
    <div class="city-weather col-lg-3 col-md-4 col-sm-6 col-xs-12" *ngFor="let weatherCity of weatherData">
        <div class="panel">
            <div class="city-name">{{weatherCity.name}}</div>
            <div class="weather-icon">
                <img class="icon" src="{{weatherIconUrl + weatherCity.weather[0].icon}}.png">
            </div>
            <div class="weather-data">
                <div class="temperature">{{convertTemperature(weatherCity.main.temp)}}</div>
                <div class="humidity">{{weatherCity.main.humidity}}%</div>
                <div class="wind">{{convertWind(weatherCity.wind.speed)}}</div>
                <div class="pressure">{{convertPressure(weatherCity.main.pressure)}}</div>        
            </div>
        </div>
    </div>
`;