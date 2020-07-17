/* eslint-disable @typescript-eslint/no-unused-vars */

/*
 File: application-88d13cc84f957638f86faa78411c402f.js
 Server: de_DE
 Date: 2020-07-16
 Time: 14:05 UTC
 */

let searchMission: () => void;

let mission_overview_timer_call: () => void;

let successfullMessage: (HTMLContent: string) => void;

let aao_building_check: (
    buildingIds: number[],
    vehicleCheckbox: JQuery<HTMLInputElement>
) => 1 | 0;
let aao_check: (
    arrAttributeName: string,
    arrElement: HTMLAnchorElement,
    arrAttributeValue: number
) =>
    | 0
    | {
          max_time: number;
      };
let aaoNextAvailable: (
    arrAttributeName: string,
    arrElement: HTMLAnchorElement
) => number;
let aao: (
    arrAttributeName: string,
    arrElement: HTMLAnchorElement,
    arrAttributeReadableName: string,
    amount: number
) => string;

let mission_participation_add: (e: number) => void;

let vehicleDistance: (
    useFlyingRoute: 0 | 1,
    latitudeVehicle: number,
    longitudeVehicle: number,
    latitudeMission: number,
    longitudeMission: number,
    responseDelay: number,
    sonderrechte: boolean
) => 1 | undefined;
let vehicleDistanceLeitstellenspiel: (
    useFlyingRoute: 0 | 1,
    latitudeVehicle: number,
    longitudeVehicle: number,
    latitudeMission: number,
    longitudeMission: number,
    sonderrechte: boolean
) => void;
let vehicleDistanceDirectTimeToObject: (
    speedInKMH: number,
    latitudeVehicle: number,
    longitudeVehicle: number,
    latitudeMission: number,
    longitudeMission: number,
    sonderrechte: boolean
) => number;
let vehicleDistanceDraw: (
    latitudeVehicle: number,
    longitudeVehicle: number,
    useFlyingRoute: 0 | 1,
    responseDelay: number
) => void;
let vehicleDistanceDirect: (
    speedInKMH: number,
    useFlyingRoute: 0 | 1,
    latitudeVehicle: number,
    longitudeVehicle: number,
    latitudeMission: number,
    longitudeMission: number,
    sonderrechte: boolean
) => void;
let allianceChatHeaderInfo: (HTMLContent: string) => void;

interface allianceChatMessage {
    alliance_admin: 'false' | 'true';
    alliance_coadmin: 'false' | 'true';
    date: string; // time
    date_hidden: string; // actual date
    message: string;
    mission_caption: string | null;
    mission_id: number | null;
    user_id: number;
    username: string;
    whisper: number; // 0 when not whispering
}
let allianceChat: (message: allianceChatMessage) => void;

let waterCalculatorSetPercent: (
    bar: HTMLDivElement,
    percentage: number,
    offset: number
) => void;
let waterCalculator: (missionId: number) => void;

let missionWindowHasUpdate: (missionId: number) => void;
