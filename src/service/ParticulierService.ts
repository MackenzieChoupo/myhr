import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { ModelParticulier } from "../model/model.particulier";
import { map } from "rxjs/operators";


@Injectable()
export class ParticulierService{
    constructor(public http:Http){

    }
    getAllparticulier(motCle:string,page:number,size:number){
            return this.http.get("http://localhost:8080/ParticulierParMc?mc="
            +motCle+"&page="+page+"&size="+size)
            .pipe(map(resp=>resp.json()));   
    }
    savePart(particulier:ModelParticulier){
            return this.http.post("http://localhost:8080/Particulier/"+particulier.login,particulier)
            .pipe(map(resp=>resp.json()));  
    }
    getParticulier(id:number){
        return this.http.get("http://localhost:8080/getParticulierParId/"+id)  
            .pipe(map(resp=>resp.json()));  
    }
    update(part:ModelParticulier){
        return this.http.put("http://localhost:8080/Particulier/"+part.id+"/"+part.login,part)
        .pipe(map(resp=>resp.json()));  
    }
    particulierParRole(p:ModelParticulier){
        return this.http.get("http://localhost:8080/ParticulierParRole?role="+p.role)
        .pipe(map(resp=>resp.json()));  
    }
    particulierParDate(p:ModelParticulier){
        return this.http.get("http://localhost:8080/ParticulierParDate?date="+p.date)
        .pipe(map(resp=>resp.json()));  
    }
    deleteparticulier(p:number){
        return this.http.delete("http://localhost:8080/Particulier/"+p)
        .pipe(map(resp=>resp.json()));  
    }
    activerparticulier(p:number){
        return this.http.delete("http://localhost:8080/activeParticulier/"+p)
        .pipe(map(resp=>resp));  
    }

    desactiverparticulier(p:number){
        return this.http.delete("http://localhost:8080/desactiveParticulier/"+p)
        .pipe(map(resp=>resp));  
    }
}