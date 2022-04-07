import Moteur from "../Interfaces/Moteur";
import Vehicule from "./Vehicule";

export default class Camion extends Vehicule{
    constructor(marque:string,moteur:Moteur) {
        super(marque,moteur);
    }

    attacherRemoque(){
        console.log('Attacher remorque');
    }

    detacherRemorque(){
        console.log('Detacher remorque');
    }
}