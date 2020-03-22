export interface Testcenter {
    id?: number;
    name: string;
    street: string;
    zip_code: string;
    city: string;
    coordinate_id: number;
    contact_datum_id: number;
    directions?: string;
    daily_capacity?: number;
    registered_vs_non_registered_preference_ratio?: number;
    verified_at?: Date;
}
