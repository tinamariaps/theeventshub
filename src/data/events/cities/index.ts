import { lasVegasEvents } from './lasVegas';
import { chicagoEvents } from './chicago';
import { orlandoEvents } from './orlando';
import { miamiEvents } from './miami';
import { tampaEvents } from './tampa';
import { fortLauderdaleEvents } from './fortLauderdale';
import type { CityEvents } from '../../types';

// Export the city events mapping
export const cityEvents: CityEvents = {
  'Las Vegas': lasVegasEvents,
  'Chicago': chicagoEvents,
  'Orlando': orlandoEvents,
  'Miami': miamiEvents,
  'Tampa': tampaEvents,
  'Fort Lauderdale': fortLauderdaleEvents
};