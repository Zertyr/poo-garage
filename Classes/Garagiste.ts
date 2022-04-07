import Garage from "./Garage";
import Personne from "./Personnes";

export default class Garagiste extends Personne {
    constructor(age: number, nom: string){
        super(age, nom);
    }

    conduire() {
        console.log(`conduis`);

    }

    presenterGarage() {
        console.log(`Voici mon garage`);

    }

    // faireLePleinDeToutesLesVoitures(garage:Garage) {
    //     garage.vehicles.forEach((vehicule) => {
    //         if(vehicule._moteur.constructor.name == 'MoteurThermique'){
    //         } else {

    //         }
    //     })
    //     console.log(`Je fais le pleins de toutes les voitures`);

    // }
}