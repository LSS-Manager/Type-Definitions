// The interface for `api/vehicles`

export interface Vehicle {
    id: number;
    caption: string;
    building_id: number;
    vehicle_type: number;
    fms_real: number; // Background-color
    fms_show: number; // Shown number
    vehicle_type_caption: string | null;
}
