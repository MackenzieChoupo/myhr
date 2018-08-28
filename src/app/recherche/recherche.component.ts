import { Component, OnInit } from '@angular/core';
import { ModelRecherche } from '../../model/model.recherche';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { UtilisateurService } from '../../service/utilisateurService';
import { EntrepriseService } from '../../service/EntrepriseService';
import { profilService } from '../../service/profilService';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {
  search:ModelRecherche=new ModelRecherche();
  pageRecherche:any=[];//any tout type de données
  motCle:string="";
  currentPage:number=0;
  secteurs:any=[];
  villes:any=[];
  size:number=5;
  profils:any=[];
  secteur:string="";
  ville:string="";
  constructor(public http:Http,
              public router:Router,
              public profilService:profilService,
              public userService:UtilisateurService,
              public entrepriseService:EntrepriseService,
              public activeRoute:ActivatedRoute) 
  { 
    this.motCle=activeRoute.snapshot.params['motCle'];
    this.secteur=activeRoute.snapshot.params['secteur'];
    this.ville=activeRoute.snapshot.params['ville'];

    console.log(activeRoute.snapshot.params['motCle']);
    console.log(activeRoute.snapshot.params['secteur']);
    console.log(activeRoute.snapshot.params['ville']);
    

  }

  ngOnInit() {
      this.profilService.getAllRecherche(this.motCle,this.currentPage,this.size)
      .subscribe(data=>{
         this.pageRecherche=data;
        console.log(data);
       
      },err=>{
        console.log(err);
      })
  }



}
