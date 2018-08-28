import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { map } from "rxjs/operators";
import { ModelEntreprise } from "../model/model.enreprise";


@Injectable()
export class EntrepriseService{
    constructor(public http:Http){

    }
    getEntreprise(motCle:string,page:number,size:number){
        return this.http.get("http://localhost:8080/EntrepriseParMc?mc="
        +motCle+"&page="+page+"&size="+size)
        .pipe(map(resp=>resp.json()));

    }
    saveEntreprise(entreprise:ModelEntreprise){
        return this.http.post("http://localhost:8080/Entreprise/"+entreprise.login,entreprise)
        .pipe(map(resp=>resp.json()));

    }
 /*  getEntreprisePardate(e:ModelEntreprise){
        return this.http.get("http://localhost:8080/EntrepriseParDate?date="+e.date)
        .pipe(map(resp=>resp.json()));
    }
    getEntrepriseParRole(e:ModelEntreprise){
        return this.http.get("http://localhost:8080/EntrepriseParRole?role="+e.role)
        .pipe(map(resp=>resp.json()));
    }*/
    updateEntreprise(e:ModelEntreprise){
        return this.http.put("http://localhost:8080/Entreprise/"+e.id+"/"+e.login,e)
        .pipe(map(resp=>resp.json()));

    }
    getEntrepriseId(id:number){
        return this.http.get("http://localhost:8080/EntrepriseId/"+id)
       .pipe(map(resp=>resp.json()));

    }  
    deleteEntreprise(id:number){
        return this.http.delete("http://localhost:8080/Entreprise/"+id)
        .pipe(map(resp=>resp.json()));

    }
    activeEntreprise(id:number){
        return this.http.delete("http://localhost:8080/activeEntreprise/"+id)
        .pipe(map(resp=>resp.json()));

    }
    desactiveEntreprise(id:number){
        return this.http.delete("http://localhost:8080/desactiveEntreprise/"+id)
        .pipe(map(resp=>resp.json()));

    }
    getAll(){
        return this.http.get("http://localhost:8080/Entreprise")
            .pipe(map(resp=>resp.json()));
    }
}