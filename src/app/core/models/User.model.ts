import { Activity } from "./Activity.model";

export interface User {
    id?: number; // ID opcional para la base de datos
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    birthdate: Date;
    sex: 'Male' | 'Female' | 'Other';
    phone: string;
    location: string;
    languages: string[];
    bio: string;
    occupation: string;
    interests: string[];
    activities: Activity[];
}