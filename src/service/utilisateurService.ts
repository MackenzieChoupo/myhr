import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { ModelUser } from "../model/utilisateurModel";
import 'rxjs/operators';
import {map} from 'rxjs/operators'

@Injectable()
export class UtilisateurService{
    
    constructor(public http:Http){

    } 
    getuser(motCle:string,page:number,size:number){
        return this.http.get("http://localhost:8080/userParMc?mc="
            +motCle+"&page="+page+"&size="+size)
              .pipe(map(resp=>resp.json()));
            

    }
    getAllUser(){
        return this.http.get("http://localhost:8080/user")
        .pipe(map(resp=>resp.json()));

    }
    getAbonnement() {
        return this.http.get("http://localhost:8080/Abonnement")
        .pipe(map(resp=>resp.json()));
    }  
    getProfil(){
        return this.http.get("http://localhost:8080/Profil")
        .pipe(map(resp=>resp.json()));
    }
    saveUser(User:ModelUser){
        return this.http.post("http://localhost:8080/user/"+User.prof+"/"+User.abonne,User)
        .pipe(map(resp=>resp.json()));
    }
    addAbonnementToUser(Users:ModelUser,abonnement:string){
        return this.http.post("http://localhost:8080/addAbonnementToUser/"+Users.login+"/"+abonnement,Users);
    }
    addUserToProfil(Users:ModelUser,profil:number){
        return this.http.post("http://localhost:8080/addAbonnementToUser/"+profil+"/"+Users.login,Users);
    }
    getUserId(id:string){
        return this.http.get("http://localhost:8080/userId/"+id)
        .pipe(map(resp=>resp.json()));

    }
    updateUser(User:ModelUser){
        return this.http.put("http://localhost:8080/user/"+User.login+"/"+User.prof+"/"+User.abonne,User)
        .pipe((resp=>resp));
    }
    deleteuser(login:string){
        return this.http.delete("http://localhost:8080/user/"+login)
        .pipe(map(resp=>resp.json()));
    }
   

}