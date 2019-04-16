import { PlaceResponse } from './place-response';

export class SpotResponse {

    id: any;
    lng: any;
    lat: any;
    radius: any;
    country: string;
    address: string;
    populationDensity: any;
    languages: string[];
    weather: string;
    currencies: string[];
    placeResponses: PlaceResponse[]

    constructor(id: any, lng: any, lat: any, radius: any, country: string, address: string, 
        populationDensity: any, languages: string[], weather: string, currencies: string[], placeResponses: PlaceResponse[]) {
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
