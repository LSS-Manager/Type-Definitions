// The interface for `api/buildings` and `api/alliance_buildings`

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
    leitstelle_building_id: number | null;
    small_building: boolean;
    enabled: boolean;
    generate_own_missions: boolean; //only visible at dispatch center
    personal_count_target: number;
    hiring_phase: 0 | 1 | 2 | 3;
    hiring_automatic: boolean;
    is_alliance_shared: boolean; //only visible at hospitals, police stations and allianceprison
    alliance_share_credits_percentage: number; // visible when is_alliance_shared true
    patient_count: number; // only visible at hospitals
    prisoner_count: number; // only visible at police stations or allianceprisons
}
