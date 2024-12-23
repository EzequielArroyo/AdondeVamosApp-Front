export interface Activity {
    id: number;
    title: string;
    category: string;
    description?: string;
    date: string;
    time: string;
    location: string;
    participants: number;
    maxParticipants: number;
    
}