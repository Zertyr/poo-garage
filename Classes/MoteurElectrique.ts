import Moteur from "../Interfaces/Moteur";

export default class MoteurEletrique implements Moteur {

    constructor() {
    }

    augmenterTours(): void {
        console.log(`j'augmente les tours en éléctrique`);
    }

    /**
     * Permet de tuer un pikachi
     */
    recharger():void {
        console.log(`Je recharge mon moteur éléctrique avec un pikachu`);
    }
    
    getMoteur(): MoteurEletrique {
        return this;
    }
}