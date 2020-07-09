// The interface for `api/buildings`

interface Extension {
    caption: string;
    available: boolean;
    enabled: boolean;
    type_id: number; // Will soon be available in all games
}

export interface Building {
    id: number;
    personal_count: number;
    level: number;
    building_type: number;
    caption: string;
    latitude: number;
    longitude: number;
    extensions: Extension[];
    leitstelle_building_id: number;
    small_building: boolean;
    enabled: boolean;
}
