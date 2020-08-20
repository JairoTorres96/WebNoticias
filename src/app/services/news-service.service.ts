import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {
  api_key = '990e28414e124033b680d1095ef36854';
  constructor(private http:HttpClient) { }

  initArticles(){
    return this.http.get('https://newsapi.org/v2/top-headlines?country=mx&apiKey='+this.api_key);
  }
  getArticlesByCountry(country: String){
    return this.http.get('http://newsapi.org/v2/top-headlines?country='+country+'&apiKey='+this.api_key);
  }
  getArticlesByCountryAndCategories(country: String, category: String){
    return this.http.get('http://newsapi.org/v2/top-headlines?country='+country+'&category='+category+'&apiKey='+this.api_key);
  }
  
}
