export interface allianceChatMessage {
    alliance_admin: 'false' | 'true';
    alliance_coadmin: 'false' | 'true';
    date: string; // time
    date_hidden: string; // actual date
    iso_timestamp: string; //Time in ISO-Format
    message: string;
    mission_caption: string | null;
    mission_id: number | null;
    user_id: number;
    username: string;
    whisper: number; // 0 when not whispering
}
