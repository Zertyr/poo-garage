import Garagiste from "./Garagiste";
import Vehicule from "./Vehicule";

export default class Garage {
    vehicules:Vehicule[] = [];
    garagiste:Garagiste;
    constructor() {
    }

    /**
     * ajouter un vehicule
     */
    ajouterVehicule(){
        console.log(`ajoute vehicule`);

    }

    /**
     * retirer un vehicule
     */
    retirerVehicule(){
        console.log(`retirer vehicule`);

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
        return this.vehicules;
    }
}