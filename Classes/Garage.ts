import Garagiste from "./Garagiste";
import Vehicule from "./Vehicule";

export default class Garage {
    vehicules:Vehicule[] = [];
    garagiste:Garagiste;
    constructor() {
    }

    ajouterVehicule(){
        console.log(`ajoute vehicule`);

    }

    retirerVehicule(){
        console.log(`retirer vehicule`);

    }

    afficherGarage(){
        console.log(`le garage`);

    }

    afficherMotos(){
        console.log(`afficher moto`);

    }

    afficherVoitures(){
        console.log(`afficher voitures`);

    }

    afficherCamions(){
        console.log(`afficherCamions`);

    }

    get vehicles():Vehicule[]{
        return this.vehicules;
    }
}