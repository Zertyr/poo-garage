import Moteur from "../Interfaces/Moteur";
import Vehicule from "./Vehicule";

export default class Moto extends Vehicule{
    constructor(marque:string,moteur:Moteur) {
        super(marque,moteur);
    }

    /**
     * permet de faire le keke en moto
     */
    faireUnWheeling(){
        console.log('WHEELING');
        
    }
}