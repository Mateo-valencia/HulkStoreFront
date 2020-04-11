import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article, ArticlePost } from '../interfaces/ArticleInterface';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Category } from 'src/interfaces/CategoryInterface';
import { HttpHeaders } from '@angular/common/http'

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

  private buildURLPost<T>( query: string, object: any) {
    query = Urlapi + query;
    console.log('peticion', query, 'objeto', object);
    return this.http.post<string>( query, object);
  }

  getArticlesListByBrand(brand: string, category: string): Observable<Article[]>{
    return this.buildURL<Article[]>(`/getArticlesByBrand/${ brand }/${ category }`);
  }

  getCategoriesList(): Observable<Category[]>{
    return this.buildURL<Category[]>('/getCategories');
  }

  getBrandsList(): Observable<string[]>{
    return this.buildURL<string[]>('/getBrands');
  }

  setArticleToCategory( idCategory: number, article: ArticlePost): Observable<string> {
    console.log('id', idCategory, 'articulo', article);
    const urlpost = '/setArticleToCategry/' + idCategory;
    return this.buildURLPost<string>(urlpost, article);
  }

}
