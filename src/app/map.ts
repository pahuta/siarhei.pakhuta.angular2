import {VARS} from './vars';

export class Map {
    currentPosition: google.maps.LatLng;
    private map: google.maps.Map;
    private infoWindow: google.maps.InfoWindow;


    constructor(
        private mapContainer: Element,
        private position: Position
    ) {
        this.map = new google.maps.Map(this.mapContainer, VARS.MAP.INIT);
        this.currentPosition = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        this.map.setCenter(this.currentPosition);
    }
}