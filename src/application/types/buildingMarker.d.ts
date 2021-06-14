import { MapFilter } from './mapFilter';

export interface BuildingMarker {
    id: number;
    user_id: number | null; // null => built from alliance funds
    name: string;
    longitude: number;
    latitude: number;
    icon: string;
    vgi: number | null; // ID of vehicle graphick pack
    lbid: number; // ID of dispatch center assigned to (0 if assigned to none)
    show_vehicles_at_startpage: boolean;
    level: number | null;
    personal_count: number;
    building_type: number;
    filter_id: MapFilter;
    detail_button: string;
}
