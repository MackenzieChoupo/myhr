import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ModelProfil } from "../model/model.profil";

@Injectable()
export class profilService{//la classe service joue le meme role qua la couche metier en jee
    
    
    constructor(public http:Http){ 

    }
    getProfilParMC(motCle:string,page:number,size:number){

        return this.http.get("http://localhost:8080/ProfilParMC?mc="
        +motCle+"&size="+size+"&page="+page)
        .pipe(resp=>resp);

    }
    saveProfil(profil:ModelProfil){

        return this.http.post("http://localhost:8080/Profil",profil) //lorsqu'on envoie la requete on doit préciser l'object à envoyer d'ou profil
        .pipe(resp=>resp);//quand une méthode dans le backend retourne un void on ne doit pas le convertir en format json donc on delete le .json() de cette md resp=>resp

    }
    getProf(id:number){

        return this.http.get("http://localhost:8080/ProfilActif/"+id)
        .pipe(resp=>resp);

    }
    updateProfil(profil:ModelProfil){

        return this.http.put("http://localhost:8080/Profil/"+profil.idprofil,profil) //lorsqu'on envoie la requete on doit préciser l'object à envoyer d'ou profil
        .pipe(resp=>resp);//quand une méthode dans le backend retourne un void on ne doit pas le convertir en format json donc on delete le .json() de cette md resp=>resp

    }
    deleteProfil(id:number){

        return this.http.delete("http://localhost:8080/Profil/"+id) //lorsqu'on envoie la requete on doit préciser l'object à envoyer d'ou profil
        .pipe(resp=>resp);//quand une méthode dans le backend retourne un void on ne doit pas le convertir en format json donc on delete le .json() de cette md resp=>resp

    }
    getProfil(){
        return this.http.get("http://localhost:8080/Profil/")
        .pipe(map(resp=>resp.json()));
    }
    getAllRecherche(motCle:string,page:number,size:number){
        return this.http.get("http://localhost:8080/getAllRecherche?mc="
        +motCle+"&size="+size+"&page="+page)
        .pipe(map(resp=>resp));
    }
}