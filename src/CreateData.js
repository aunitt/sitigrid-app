import { apiURL } from './api.js';

const minGeneration = 0.1;
const maxGeneration = 0.7;

const minConsumption = 0.1;
const maxConsumption = 0.5;

function randn_bm() {
    let u = 0, v = 0;
    while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)
    while(v === 0) v = Math.random();
    let num = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
    num = num / 10.0 + 0.5; // Translate to 0 -> 1
    if (num > 1 || num < 0) return randn_bm(); // resample between 0 and 1
    return num;
}

function getRandomFloat(min, max) {
    return randn_bm() * (max - min) + min;
  }

export default function CreateData(meterpoint) {
    console.log('Creating data for '+meterpoint);

    const productionAmount = getRandomFloat(minGeneration,maxGeneration);

    const generationOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ MPAN: meterpoint,
                               productionAmount: productionAmount
                             }
                            )
    };
    fetch(apiURL+'/productions', generationOptions)
        .then(response => response.json());

    const consumptionAmount = getRandomFloat(minConsumption,maxConsumption);

    const consumptionOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ MPAN: meterpoint,
                               consumptionAmount: consumptionAmount
                             }
                            )
    };
    fetch(apiURL+'/consumptions', consumptionOptions)
        .then(response => response.json());
};