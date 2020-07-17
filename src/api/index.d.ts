import { Vehicle } from './Vehicle';
import { VehicleStates } from './VehicleStates';
import { Building } from './Building';
import { Credits } from './Credits';
import { AllianceInfo } from './AllianceInfo';
import { Mission } from '../Mission';

export interface Index {
    'api/vehicles': Vehicle[];
    'api/vehicle_states': VehicleStates;
    'api/buildings': Building[];
    'api/credits': Credits;
    'api/allianceinfo': AllianceInfo;
    'einsaetze.json': Mission[];
}
