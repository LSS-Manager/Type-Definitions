import { Vehicle } from './Vehicle';
import { VehicleStates } from './VehicleStates';
import { Building } from './Building';
import { Credits } from './Credits';
import { AllianceInfo } from './AllianceInfo';
import { Mission } from '../Mission';

export interface Index {
    'api/vehicles': Vehicle[];
    // eslint-disable-next-line @typescript-eslint/ban-types
    'api/vehicles/ID': Vehicle | {}; // where ID is a number
    'api/vehicle_states': VehicleStates;
    'api/buildings': Building[];
    // eslint-disable-next-line @typescript-eslint/ban-types
    'api/buildings/ID': Building | {}; // where ID is a number
    'api/buildings/ID/vehicles': Vehicle[]; // where ID is a number
    'api/credits': Credits;
    'api/allianceinfo': AllianceInfo;
    'einsaetze.json': Mission[];
}
