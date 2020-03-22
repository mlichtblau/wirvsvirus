export interface Patient {
    id?: number;
    zip: string;
    age: number;
    living_situation: string;
    workplace: string;
    flu_vaccinated: boolean;
    symptoms_since: string;
    criterion_names: Array<string>;
}
