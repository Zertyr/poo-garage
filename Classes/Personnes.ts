export default abstract class Personne {
    _age:number;
    _nom:string;

    constructor(age:number,nom:string) {
        this._age = age;
        this._nom = nom;
    }

    /**
     * permet d'afficher la personne'
     */
    sePresente(){
        console.log(`Bonjour je m'appelle ${this._nom} et j'ai ${this._age} ans.`);
    }

} 