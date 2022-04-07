import Moteur from "./Moteur";

export default interface MoteurThermique extends Moteur {
    /**
     * fait le plein
     */
    faireLePlein():void;
}