import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../interfaces/ArticleInterface';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

const Urlapi = environment.UrlRest;

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient) { }

  private buildURL<T>( query: string) {
    query = Urlapi + query;
    return this.http.get<T>( query );
  }

  getArticlesList(): Observable<Article[]>{
    return this.buildURL<Article[]>('/getArticles');
  }

  getArticlesListByBrand(brand: string): Observable<Article[]>{
    return this.buildURL<Article[]>(`/getArticlesMarvel/${ brand }`);
  }

}
