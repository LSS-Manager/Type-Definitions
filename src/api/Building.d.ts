// The interface for `api/buildings` and `api/alliance_buildings`

type Extension = {
    caption: string;
    enabled: boolean;
    type_id: number;
} & (
    | {
          available: false;
          available_at: string;
      }
    | {
          available: true;
      }
);
interface Storage {
    upgrade_type: string;
    available: boolean;
    type_id: string;
}
interface Specialization {
    caption: string;
    type: string;
    active: boolean;
    available: boolean;
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
    storage_upgrades: Storage[];
    leitstelle_building_id: number | null;
    small_building: boolean;
    enabled: boolean;
    generate_own_missions: boolean; //only visible at dispatch center
    personal_count_target: number;
    hiring_phase: 0 | 1 | 2 | 3;
    hiring_automatic: boolean;
    custom_icon_url?: string;
    specialization: Specialization[];
    is_alliance_shared: boolean; //only visible at hospitals, police stations and allianceprison
    alliance_share_credits_percentage: number; // visible when is_alliance_shared true
    patient_count: number; // only visible at hospitals
    prisoner_count: number; // only visible at police stations or allianceprisons
    generates_mission_categories: string[];
}