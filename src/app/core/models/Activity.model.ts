export interface Activity {
    id: number;
    title: string;
    datetime: Date;
    description: string;
    location: string;
    participants: number;
    maxParticipants: number;
    category: string;
}