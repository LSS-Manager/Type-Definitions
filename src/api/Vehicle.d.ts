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
    tractive_vehicle_id: number | null;
    queued_mission_id: number | null;
    equipments: Equipments[]; // Equipment only visible when the car is approaching and the RCs are assigned.
    assigned_equipments: AEquipments[]; // Equipment only visible when the car is approaching and the RCs are assigned. Not availble in V2
    //V2 API
    image_url_static: string;
    image_url_animated: string;
}

interface Equipments { // Only visible when the car is approaching and the RCs are assigned.
    equipment_type: string;
    size: number; // Only in V2
    caption: string; //Only in V2
    id: number;
}
interface AEquipments { // Only visible when the car is approaching and the RCs are assigned.
    equipment_type: string;
    id: number;
}