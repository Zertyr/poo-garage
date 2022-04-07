import Moteur from "../Interfaces/Moteur";
import Vehicule from "./Vehicule";

export default class Voiture extends Vehicule {
    constructor(marque:string,moteur:Moteur) {
        super(marque,moteur)
    }
}