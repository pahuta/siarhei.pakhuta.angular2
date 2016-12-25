export class DisplayModes {
    temperature: string;
    wind: string;
    pressure: string;

    constructor(params: DisplayModes) {
        this.temperature = params.temperature;
        this.wind = params.wind;
        this.pressure = params.pressure;
    }
}

