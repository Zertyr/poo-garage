import Moteur from "../Interfaces/Moteur";
import Garage from "./Garage";

export default abstract class Vehicule{
    protected _marque:string;
    _moteur: Moteur;
    constructor(marque:string,moteur:Moteur) {
        this._marque = marque;
        this._moteur = moteur;
    }

    /**
     * permet d'avancer
     */
    avancer():void{
        console.log(`j'avance`);
    }

    /**
     * permet de reculer
     */
    reculer():void{
        console.log(`je recule`);
    }
    
    /**
     * permet de freiner
     */
    freiner():void{
        console.log(`je freine`);
    }


    /**
     * permet d'afficher le véhicule'
     */
    afficherVehicule(){
        console.log(`${this}`);
    }

    /**
     * getter pour obtenir la marque
     */

    get marque(){
        return this._marque;
    }
}