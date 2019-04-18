export class PlaceResponse {

    id: string;
    name: string;
    rating: number;

    constructor(id: string, name: string, rating: number) {
        this.id = id;
        this.name = name;
        this.rating = rating;
    }
}