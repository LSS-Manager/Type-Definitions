//WIP!
interface missionMarkerAdd {
    id: number;
    sw_start_in: number; //-1 for normal missions
    sw: boolean;
    tv:number; //unknown
    mtid: number; //unknown
    kt: boolean;
    alliance_id: number | null; //own missions: null
    prisoners_count: number;
    patients_count: number;
    user_id: number; 
    address: string;
    vehicle_state: number; //0: no vehicle arriving (red); 1: vehicles arriving (yellow); 2: needed vehicles on scene (green)
    missing_text: string | null;
    missing_text_short: string | null;
    live_current_value: number; //unknown
    finish_url: String; //unknown
    date_end: number; //date in unixtime, only used for timed mission
    date_now: number; //date in unixtime
    longitude: number; //longitude with 5 digits after decimal point
    latitude: number; //latitude with 5 digits after decimal point
    tlng: number | null;
    tlat: number | null;
    icon: string;
    caption: string;
    caption_old: string;
    filter_id: string | null; //"firehouse_missions", "ambulance_station_missions","police_station_missions","technical_aid_organization_missions","riot_police_missions","rapid_deployment_group_missions","water_watch_missions","factory_fire_brigade_missions" custom mission => null


}
