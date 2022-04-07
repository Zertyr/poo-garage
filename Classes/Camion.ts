import Moteur from "../Interfaces/Moteur";
import Vehicule from "./Vehicule";

export default class Camion extends Vehicule{
    constructor(marque:string,moteur:Moteur) {
        super(marque,moteur);
    }

    /**
     * attache la remorque
     */
    attacherRemoque(){
        console.log('Attacher remorque');
    }

    /**
     * detacher la remorque
     */
    detacherRemorque(){
        console.log('Detacher remorque');
    }
}