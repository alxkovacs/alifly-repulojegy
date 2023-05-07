import { Airline } from "./Airline";

export interface Flight {
    name: string;
    photo_url: string;
    airline_url: string;
    airline: Airline;
    price: number;
    date: string;
}