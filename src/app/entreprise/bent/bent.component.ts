import { Component, OnInit } from '@angular/core';
import { ModelEntreprise } from '../../../model/model.enreprise';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { RoleService } from '../../../service/roleService';
import { UtilisateurService } from '../../../service/utilisateurService';
import { EntrepriseService } from '../../../service/EntrepriseService';

@Component({
  selector: 'app-bent',
  templateUrl: './bent.component.html',
  styleUrls: ['./bent.component.css']
})
export class BentComponent implements OnInit {

  entreprise:ModelEntreprise=new ModelEntreprise();
  pageEntreprise:any;//any tout type de données
  motCle:string="";
  currentPage:number=0;
  size:number=5;
  mode:number=1;//utilisé pour afficher les infos récupérées
  pages:Array<number>;
  utilisateur:any=[];
  login:string="";
  roles:any;
  role:string="";
  date:string="";
  constructor(public http:Http,
            public entrepriseService:EntrepriseService,
             public userService:UtilisateurService,
             public roleService:RoleService,
             public route:Router ) 
             { 

  }

  ngOnInit() {
    this.getUser();
    this.doSearch();
  }
  doSearch(){
    this.entrepriseService.getEntreprise(this.motCle,this.currentPage,this.size)
      .subscribe(data=>{
          this.pageEntreprise=data;
          this.pages=new Array(data.totalPages);
      },err=>{
        console.log(err);
      })
  }

  chercher(){
    this.doSearch();
  }
  getUser(){
    this.userService.getAllUser()
    .subscribe(data=>{
      this.utilisateur=data;
    },err=>{
      console.log(err);
    })
  }
  getRole(){
    this.roleService.getAllRole()
      .subscribe(data=>{
        this.roles=data;
      },err=>{
        console.log(err);
      })
  }
  gotoPage(i:number){
    this.currentPage=i;
    this.doSearch();
  }
  saveEntre(){
    if((this.entreprise.password)!=(this.entreprise.confirmPassword)){
      alert('les mots de passe doivent être identiques');
    }else{
      this.entrepriseService.saveEntreprise(this.entreprise)
      .subscribe(data=>{
        console.log(data);
       alert(' Entreprise Enregistrée avec succès!!!');
      },err=>{
        console.log(err);
      })
    }
  
   
  }
 /* entrepriseParDate(){
    this.entrepriseService.getEntreprisePardate(this.entreprise)
      .subscribe(data=>{
        this.pageEntreprise=data;
        console.log(data);
      },err=>{
        console.log(err);
      })
  }
  entrepriseParRole(){
    this.entrepriseService.getEntrepriseParRole(this.entreprise)
      .subscribe(data=>{
        this.pageEntreprise=data;
        console.log(data);
      },err=>{
        console.log(err);
      })
  }*/
  onEditEntreprise(id:number){
    this.route.navigate(['edit-entreprise',id]);
  }
  onDeleteEntreprise(e:ModelEntreprise){
    let confirm=window.confirm('êtes vous sûre de vouloir Supprimer cette Entreprise???');
    if( confirm==true){
      this.entrepriseService.deleteEntreprise(e.id)
      .subscribe(data=>{
        console.log(data);
        this.pageEntreprise.content.splice(
          this.pageEntreprise.content.indexOf(e),1
        );
        alert('Entreprise Supprimée avec Succès');
      },err=>{
        console.log(err);
      })
    }
     
  }
  onActiverEntreprise(id:number){
    this.entrepriseService.activeEntreprise(id)
      .subscribe(data=>{
        console.log(data);
        alert('Entreprise réactivée...');
        this.doSearch();
      },err=>{
        console.log(err);
      })
  }
  onDesactiverEntreprise(e:ModelEntreprise){
    let confirm=window.confirm('êtes vous sûre de vouloir désactiver cette entreprise??');
    if(confirm==true){
      this.entrepriseService.desactiveEntreprise(e.id)
      .subscribe(data=>{
        console.log(data);
        alert('Entreprise désactivé avec succès...');
        this.doSearch();
      },err=>{
        console.log(err);
      })
    }
    
        
  }


}
