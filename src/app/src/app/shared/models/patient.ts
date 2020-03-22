export interface Patient {
    id?: number;
    zip_code: string;
    age: number;
    living_situation: string;
    workplace: string;
    anamnestic_items: Array<{ criterion: string, answer: string }>;
}
