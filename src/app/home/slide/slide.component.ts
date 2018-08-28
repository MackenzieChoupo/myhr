import { Component, OnInit } from '@angular/core';
import { ModelProfil } from '../../../model/model.profil';
import { Http } from '@angular/http';
import { profilService } from '../../../service/profilService';
import { Router, ActivatedRoute } from '@angular/router';
import { UtilisateurService } from '../../../service/utilisateurService';
import { ModelRecherche } from '../../../model/model.recherche';
import { EntrepriseService } from '../../../service/EntrepriseService';


@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {

  search:ModelRecherche=new ModelRecherche();
  pageProfils:any;//any tout type de données
  motCle:string="";
  currentPage:number=0;
  secteurs:any=[];
  villes:any=[];
  size:number=5;
  profils:any=[];
  mode:number=1;//utilisé pour afficher les infos récupérées
  pages:Array<number>;//besoin de pagination
  //private http:Http injection de dépendance
  //lorsqu'on ajoute la classe service, on declare une variable de meme type afin de l'injecter
  //Router: cette classe permet de naviguer entre les routes
  constructor(public http:Http,
              public profilService:profilService,
              public router:Router,
              public userService:UtilisateurService,
              public entrepriseService:EntrepriseService,
              public activeRoute:ActivatedRoute) {

   }
 //ngOnInit() est la toute première fonction a être exécutée quand cette classe est appellé 
  ngOnInit() {
    this.getProfil();
    this. getSecteur();
  }
  dosearch(){
    this.profilService.getProfilParMC(this.motCle,this.currentPage,this.size)
    .subscribe(data=>{
      this.pageProfils=data;
    },err=>{
      console.log(err);
    })
  }
  getSecteur(){
    this.entrepriseService.getAll()
      .subscribe(data=>{
        this.secteurs=data;
        console.log(data);
      },err=>{
        console.log(err);
      })
  }
  afficher(){
    this.router.navigate(['recherche',this.search]);
  }
  chercher(){
      this.dosearch();
  }
  gotoPage(i:number){
    this.currentPage=i;
    this.dosearch();
  }
  getProfil(){
    this.profilService.getProfil()
      .subscribe(data=>{
        console.log(data);
        this.profils=data;
      },err=>{
        console.log(err);
      })
  }
  
  onEditProfil(id:number){
    this.router.navigate(['edit-profil',id]);//routage vers le composant d'édition
  }
 onDeleteProfil(p:ModelProfil){
    let confirm=window.confirm('Etes-vous sûre de vouloir supprimer?');
    if(confirm==true){
      this.profilService.deleteProfil(p.idprofil) 
      .subscribe(data=>{//a ce niveau, les données sont déjà supprimée dans la bd mais il reste aussi a le supprimer de la vue d'où la methode avec splice
        this.pageProfils.content.splice(
          this.pageProfils.content.indexOf(p),1
        );
          this.dosearch();
      },err=>{
        console.log(err);
      })
    }
    
  }


}
