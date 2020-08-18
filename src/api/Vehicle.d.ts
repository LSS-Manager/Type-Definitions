// The interface for `api/vehicles`

export interface Vehicle {
    id: number;
    caption: string;
    building_id: number;
    vehicle_type: number;
    fms_real: number; // Background-color
    fms_show: number; // Shown number
    vehicle_type_caption: string | null;
    working_hour_start: number;
    working_hour_end: number;
    alarm_delay: number;
    max_personnel_override: number | null;
    assigned_personnel_count: number;
    ignore_aao: boolean;
    target_type: 'mission' | 'building' | null; // Where the vehicle is currently driving to
    target_id: number | null; // The ID of where the vehicle is currently driving to
}
