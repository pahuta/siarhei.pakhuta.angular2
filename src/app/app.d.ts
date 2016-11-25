/// <reference path="./weather.d.ts" />

declare module Coords {
    export interface LatLng {
        latitude: number;
        longitude: number;
    }
}

declare module 'Coords/Interfaces' {
    export default Coords;
}
