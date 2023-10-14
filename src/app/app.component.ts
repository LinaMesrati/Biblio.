import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {

  title="Gestion des livres------";
  jours =['Lundi', 'Mardi', 'mercredi', '...'];
  show = true;

  url?:string

  url1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEgzWddf2Gdd4fNF3MHMx22TW7aEpykHcVFVfei5DiEw&s";
  url2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUCvC3Ymo3FXkzkTe9OwBgaCfquhe0IY2yJ-WR3zMutQ&s";


  changeLogo = ()=>{
    //console.log("Button Clicked!!!");
    this.url = (this.url === this.url1)?this.url2:this.url1;
  }

  showLogo(){
    this.show = !this.show;
  }

  ngOnInit(): void {
    this.url = this.url1;
  }


}
