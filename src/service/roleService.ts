import { Injectable } from "@angular/core";
import { Http} from "@angular/http";
import { ModelRole } from "../model/model.role";
import { map } from "rxjs/operators";



@Injectable()
export class RoleService{

    constructor(public http:Http){

    }
    getRole(motCle:string,page:number,size:number){

        return this.http.get("http://localhost:8080/roleParMc?mc="
        +motCle+"&size="+size+"&page="+page)
        .pipe(map(resp=>resp.json()));

    }
    getAllRole(){

        return this.http.get("http://localhost:8080/role")
        .pipe(map(resp=>resp.json()));

    }
    saveRole(role:ModelRole){

        return this.http.post("http://localhost:8080/role",role)
        .pipe(map(resp=>resp.json()));

    }
    getRoleParId(id:string){
        return this.http.get("http://localhost:8080/roleId/"+id)
        .pipe(map(resp=>resp.json()));
    }

    updateRole(roles:ModelRole){
        return this.http.put("http://localhost:8080/role/"+roles.role,roles) 
        .pipe(map(resp=>resp.json()));
    }
    deleteRole(id:String){
      return  this.http.delete("http://localhost:8080/role/"+id)
      .pipe(map(resp=>resp.json()));

    }
}