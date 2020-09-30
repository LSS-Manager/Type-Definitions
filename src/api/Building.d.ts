// The interface for `api/buildings`

interface Extension {
    caption: string;
    available: boolean;
    enabled: boolean;
    type_id: number;
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
    generate_own_missions: boolean;
    personal_count_target: number;
    hiring_phase: 0 | 1 | 2 | 3;
    hiring_automatic: boolean;
    is_alliance_shared: boolean;
    alliance_share_credits_percentage: number; // visible when is_alliance_shared true
    patient_count: number; // only visible at hospitals
    prisoner_count: number; // only visible at police stations or allianceprisons
}
