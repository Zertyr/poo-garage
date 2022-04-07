import Moteur from "../Interfaces/Moteur";
import MoteurThermique from "../Interfaces/MoteurThermique";

export default class MoteurDiesel implements MoteurThermique {
    constructor() {
        
    }

    faireLePlein(): void {
        console.log('je fais le plein de Diesel');
        
    }

    augmenterTours(): void {
        console.log(`j'augmente les tours en Diesel`);
        
    }
    getMoteur(): MoteurThermique {
        return this;
    }
}