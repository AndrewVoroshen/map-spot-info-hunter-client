export class PlaceResponse {

    id: string;
    name: string;
    rating: any;

    constructor(id: string, name: string, rating: any) {
        this.id = id;
        this.name = name;
        this.rating = rating;
    }
}