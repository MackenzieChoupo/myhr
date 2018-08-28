import { Component, OnInit } from '@angular/core';
import { ModelParticulier } from '../../../model/model.particulier';
import { Http } from '@angular/http';
import { UtilisateurService } from '../../../service/utilisateurService';
import { Router } from '@angular/router';
import { ParticulierService } from '../../../service/ParticulierService';
import { RoleService } from '../../../service/roleService';

@Component({
  selector: 'app-bodypart',
  templateUrl: './bodypart.component.html',
  styleUrls: ['./bodypart.component.css']
})
export class BodypartComponent implements OnInit {
  particulier:ModelParticulier=new ModelParticulier();
  pageParticulier:any;//any tout type de données
  motCle:string="";
  currentPage:number=0;
  size:number=5;
  mode:number=1;//utilisé pour afficher les infos récupérées
  pages:Array<number>;
  utilisateurs:any=[];
  login:string="";
  roles:any;
  role:string="";
  date:string;
  constructor(public http:Http,public partService:ParticulierService,
      public userService:UtilisateurService,public route:Router,
        public roleService:RoleService) {

   }

  ngOnInit() {
    this.getRole()
    this.getUser();
    this.doSearch();
  }
  doSearch(){
    this.partService.getAllparticulier(this.motCle,this.currentPage,this.size)
      .subscribe(data=>{
          this.pageParticulier=data;
          this.pages=new Array(data.totalPages);
      },err=>{
        console.log(err);
      })
  }
  chercher(){
    this.doSearch();
  }
  gotoPage(i:number){
    this.currentPage=i;
    this.doSearch();
  }
  getUser(){
    this.userService.getAllUser()
    .subscribe(data=>{
      this.utilisateurs=data;
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
  particulierParRole(){
      this.partService.particulierParRole(this.particulier)
        .subscribe(data=>{
          this.pageParticulier=data;
          console.log(data);
        },err=>{
          console.log(err);
        })
  }
  particulierParDate(){
   this.partService.particulierParDate(this.particulier)
   .subscribe(data=>{
      this.pageParticulier=data;
      console.log(data);
    },err=>{
    console.log(err);
  })
  }
  savePart(){
    if((this.particulier.password)!=(this.particulier.confirmPassword)){
      alert('les mots de passe doivent être identiques');
    }else{
    this.partService.savePart(this.particulier)
      .subscribe(data=>{
       console.log(data);
       alert('Inscription effectuée avec succès!!!');
      },err=>{
        console.log(err);
      }) 
    }
  }
  onEditParticulier(id:number){
    this.route.navigate(['edit-particulier',id]);
  }
  onDeleteParticulier(p:ModelParticulier){
    let confirm=window.confirm('Voulez-vous supprimer');
    if(confirm==true){
      this.partService.deleteparticulier(p.id)
      .subscribe(data=>{
        console.log(data);
        this.pageParticulier.content.splice(
          this.pageParticulier.content.indexOf(p),1
        );
        this.doSearch();
       },err=>{
         console.log(err);
       })
    }
    
  }
  onActiverParticulier(p:number){
    
      this.partService.activerparticulier(p)
      .subscribe(data=>{
        console.log(data);
       alert('Particulier réactivé avec success');
        this.doSearch();
       },err=>{
         console.log(err);
       })
  }

  onDesactiverParticulier(p:ModelParticulier){
    let confirm=window.confirm('êtes-vous sûre de vouloir desactiver ce particulier??')
    if(confirm==true){
      this.partService.desactiverparticulier(p.id)
      .subscribe(data=>{
        console.log(data);
        alert('Particulier désactivé');
        this.doSearch();
       },err=>{
         console.log(err);
       })
    }
  }

}
