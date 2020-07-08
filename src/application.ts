/* eslint-disable @typescript-eslint/no-unused-vars */

/*
 File: application-c7a3fc75c5287039872bd9fd63bad29b.js
 Server: de_DE
 Date: 2020-07-08
 Time: 15:15 UTC
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
