import Garagiste from "./Garagiste";
import Vehicule from "./Vehicule";

export default class Garage {
    _vehicules:Vehicule[] = [];
    _garagiste:Garagiste;
    constructor(garagiste: Garagiste) {
        this._garagiste = garagiste;
    }

    /**
     * ajouter un vehicule
     * @param vehicules: tableau de vehicule
     */
    ajouterVehicule(...vehicules:Vehicule[]):void{
        vehicules.forEach(vehicule => {
            console.log(`${vehicule.marque} ajouté au garage de ${this._garagiste._nom} avec succès`);
            this._vehicules.push(vehicule);
        });

        
    }

    /**
     * retirer un vehicule
     * @param vehicule: le véhicule à retirer du garage
     */
    retirerVehicule(vehicule:Vehicule):Vehicule[]{
        return this._vehicules.splice(this._vehicules.indexOf(vehicule),1);
    }

    /**
     * afficher les vehicules
     */
    afficherGarage(){
        let compteur = 0;
        this._vehicules.forEach(vehicule => {
            compteur++;
            console.log(`${compteur} : ${vehicule.marque} , ${vehicule._moteur.constructor.name}`);
        });

    }

    /**
     * afficher les motos
     */
    afficherMotos(){
        console.log(`afficher moto`);

    }

    /**
     * afficher les voitures
     */
    afficherVoitures(){
        console.log(`afficher voitures`);

    }

    /**
     * afficher les camions
     */
    afficherCamions(){
        console.log(`afficherCamions`);

    }

    /**
     * get pour obtenir les vehicules
     */
    get vehicles():Vehicule[]{
        return this._vehicules;
    }
}