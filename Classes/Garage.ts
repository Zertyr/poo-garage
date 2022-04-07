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
            console.log(`${vehicule.marque} ajouté au garage de ${this._garagiste} avec succès`);
            this._vehicules.push(vehicule);
        });

        
    }

    /**
     * retirer un vehicule
     * @param vehicule: le véhicule à retirer du garage
     */
    retirerVehicule(vehicule):Vehicule[]{
        return this._vehicules.splice(vehicule);
    }

    /**
     * afficher les vehicules
     */
    afficherGarage(){
        console.log(`le garage`);

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