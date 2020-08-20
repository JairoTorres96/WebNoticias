import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from './../services/news-service.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  mArticles: Array<string>;
  mSources: Array<string>;
  selectedCat: string = '0';
  selectedCon: string = '0';
  isselected: boolean = false;


  constructor(private newsapi:NewsServiceService) {}

  ngOnInit() {
    //Carga Noticias
    this.newsapi.initArticles().subscribe(data => this.mArticles = data['articles']);
  }

  //controlador de eventos para el evento de cambio del select de categorias
  selectChangeHandlerCat (event: any) {
    //update the ui
    this.selectedCat = event.target.value;
    this.searchArticles();
  }

  //controlador de eventos para el evento de cambio del select de paises
  selectChangeHandlerCon (event: any) {
    this.selectedCon = event.target.value;
    if(this.selectedCon != '0'){this.isselected=true;}
    this.searchArticles();
  }

  searchArticles(){
    if(this.selectedCon!='0' && this.selectedCat == '0'){
      this.newsapi.getArticlesByCountry(this.selectedCon).subscribe(data => this.mArticles = data['articles']);
    }
    else if (this.selectedCon!='0' && this.selectedCat != '0'){
      this.newsapi.getArticlesByCountryAndCategories(this.selectedCon,this.selectedCat).subscribe(data => this.mArticles = data['articles']);
    }else{
      this.newsapi.initArticles().subscribe(data => this.mArticles = data['articles']);
    }
  }
}
