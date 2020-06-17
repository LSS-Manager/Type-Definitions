import { Vehicle } from './api/Vehicle';
import { VehicleStates } from './api/VehicleStates';
import { Building } from './api/Building';
import { Credits } from './api/Credits';
import { AllianceInfo } from './api/AllianceInfo';
import { Mission } from './Mission';

interface API {
    'api/vehicles': Vehicle[];
    'api/vehicle_states': VehicleStates;
    'api/buildings': Building[];
    'api/credits': Credits;
    'api/allianceinfo': AllianceInfo;
    'einsaetze.json': Mission[];
}
