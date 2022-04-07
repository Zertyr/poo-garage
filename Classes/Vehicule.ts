import Moteur from "../Interfaces/Moteur";
import Garage from "./Garage";

export default abstract class Vehicule{
    protected _marque:string;
    _moteur: Moteur;
    constructor(marque:string,moteur:Moteur) {
        this._marque = marque;
        this._moteur = moteur;
    }

    avancer():void{
        console.log(`j'avance`);
    }

    reculer():void{
        console.log(`je recule`);
    }
    
    freiner():void{
        console.log(`je freine`);
    }

    afficherVehicule(){
        console.log(`${this}`);
    }
}