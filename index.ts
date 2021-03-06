import Camion from "./Classes/Camion";
import Garage from "./Classes/Garage";
import Garagiste from "./Classes/Garagiste";
import MoteurDiesel from "./Classes/MoteurDiesel";
import MoteurEletrique from "./Classes/MoteurElectrique";
import MoteurEssence from "./Classes/MoteurEssence";
import Moto from "./Classes/Moto";
import Vehicule from "./Classes/Vehicule";
import Voiture from "./Classes/Voiture";
import Moteur from "./Interfaces/Moteur";
import MoteurThermique from "./Interfaces/MoteurThermique";

const garagiste:Garagiste = new Garagiste(45,'Roger');
const voiture:Voiture = new Voiture('Skoda',new MoteurDiesel());
const camion:Camion = new Camion(`Peugeot`,new MoteurEssence());
const garage:Garage = new Garage(garagiste);
const monteurDiesel: MoteurThermique = new MoteurDiesel();
const moto:Moto = new Moto(`Mitsubishi`,monteurDiesel);
const ami:Voiture = new Voiture(`Renault`, new MoteurEletrique());
moto.faireUnWheeling();
// garagiste.faireLePleinDeToutesLesVoitures();
moto._moteur.augmenterTours();
moto._moteur.getMoteur().faireLePlein();
ami._moteur.getMoteur().recharger();
ami._moteur.getMoteur().recharger();
garage.ajouterVehicule(ami,moto,camion);
garage.afficherGarage();
garage.afficherMotos();
garage.retirerVehicule(moto);
garage.afficherGarage();
garagiste.presenterGarage(garage);