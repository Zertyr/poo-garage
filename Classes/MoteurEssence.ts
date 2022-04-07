import Moteur from "../Interfaces/Moteur";
import MoteurThermique from "../Interfaces/MoteurThermique";

export default class MoteurEssence implements MoteurThermique {
    constructor() {
        
    }

    faireLePlein(): void {
        console.log(`je fais le plein d'essence`);
    }

    augmenterTours(): void {
        console.log(`j'augmente les tours en essence`);
    }
    getMoteur(): MoteurThermique {
        return this;
    }
}