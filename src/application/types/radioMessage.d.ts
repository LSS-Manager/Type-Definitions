interface BasicRadioMessage {
    user_id: number;
}

interface VehicleRadioMessage extends BasicRadioMessage {
    type: 'vehicle_fms';
    additionalText: string;
    caption: string;
    fms: number;
    fms_real: number;
    fms_text: string;
    id: number;
    mission_id: number;
    target_building_id: number;
}

interface SicherheitswacheRadioMessage extends BasicRadioMessage {
    type: 'sicherheitswache';
    success: boolean;
    caption: string;
    credits: number;
}

export type RadioMessage = VehicleRadioMessage | SicherheitswacheRadioMessage;