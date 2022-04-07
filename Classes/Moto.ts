import Moteur from "../Interfaces/Moteur";
import Vehicule from "./Vehicule";

export default class Moto extends Vehicule{
    constructor(marque:string,moteur:Moteur) {
        super(marque,moteur);
    }

    faireUnWheeling(){
        console.log('WHEELING');
        
    }
}