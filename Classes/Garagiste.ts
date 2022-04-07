import Garage from "./Garage";
import Personne from "./Personnes";

export default class Garagiste extends Personne {
    constructor(age: number, nom: string){
        super(age, nom);
    }

    /**
     * permet de conduire
     */
    conduire() {
        console.log(`conduis`);

    }

    /**
     * presente le garage du garagiste
     */
    presenterGarage(garage:Garage) {
        console.log(`Voici mon garage : `);
        garage.afficherGarage();
    }

    /**
     * faire le pleins de toutes les voitures d'un garage
     * @param garage: garage cible
     */
    faireLePleinDeToutesLesVoitures(garage:Garage) {
        garage.vehicles.forEach((vehicule) => {
            if(vehicule._moteur.constructor.name == 'MoteurThermique'){
                vehicule._moteur.getMoteur().faireLePlein();
            } else {
                vehicule._moteur.getMoteur().recharger();
            }
        })
        console.log(`J'ai fais le pleins de toutes les voitures`);

    }
}