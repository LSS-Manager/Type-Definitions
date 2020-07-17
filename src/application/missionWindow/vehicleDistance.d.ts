export function vehicleDistance(
    useFlyingRoute: 0 | 1,
    latitudeVehicle: number,
    longitudeVehicle: number,
    latitudeMission: number,
    longitudeMission: number,
    responseDelay: number,
    sonderrechte: boolean
): true | undefined;
export function vehicleDistanceLeitstellenspiel(
    useFlyingRoute: 0 | 1,
    latitudeVehicle: number,
    longitudeVehicle: number,
    latitudeMission: number,
    longitudeMission: number,
    sonderrechte: boolean
): void;
export function vehicleDistanceDirectTimeToObject(
    speedInKMH: number,
    latitudeVehicle: number,
    longitudeVehicle: number,
    latitudeMission: number,
    longitudeMission: number,
    sonderrechte: boolean
): number;
export function vehicleDistanceDraw(
    latitudeVehicle: number,
    longitudeVehicle: number,
    useFlyingRoute: 0 | 1,
    responseDelay: number
): void;
export function vehicleDistanceDirect(
    speedInKMH: number,
    useFlyingRoute: 0 | 1,
    latitudeVehicle: number,
    longitudeVehicle: number,
    latitudeMission: number,
    longitudeMission: number,
    sonderrechte: boolean
): void;
