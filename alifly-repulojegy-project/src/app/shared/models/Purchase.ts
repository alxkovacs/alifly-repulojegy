import { Airline } from "./Airline";

export interface Purchase {
    id: string;
    userID: string;
    name: string;
    photo_url: string;
    airline_url: string;
    date: string;
    airline: Airline;
    price: number;
}