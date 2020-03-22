export interface Patient {
    id?: number;
    zip_code: string;
    age: number;
    living_situation: string;
    workplace: string;
    criterion_names?: Array<string>;
}
