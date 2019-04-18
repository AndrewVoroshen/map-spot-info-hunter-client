import { PlaceResponse } from './place-response';

export class SpotResponse {

    id: number;
    lng: number;
    lat: number;
    radius: number;
    country: string;
    address: string;
    populationDensity: number;
    languages: string[];
    weather: string;
    currencies: string[];
    placeResponses: PlaceResponse[];

    constructor(id: number, lng: number, lat: number, radius: number, country: string, address: string, 
        populationDensity: number, languages: string[], weather: string, currencies: string[], placeResponses: PlaceResponse[]) {
        this.id = id;
        this.lng = lng;
        this.lat = lat;
        this.radius = radius;
        this.country = country;
        this.address = address;
        this.populationDensity = populationDensity;
        this.languages = languages;
        this.weather = weather;
        this.currencies = currencies;
        this.placeResponses = placeResponses;
    }

}
