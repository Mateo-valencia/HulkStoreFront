import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Article, ArticlePost } from '../interfaces/ArticleInterface';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Category } from 'src/interfaces/CategoryInterface';


const Urlapi = environment.UrlRest;

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient) { }

  private buildURL<T>( query: string) {
    query = Urlapi + query;
    return this.http.get<T>( query);
  }

  private buildURLPost<T>( query: string, object: any) {
    query = Urlapi + query;
    return this.http.post<T>(query, object);
  }

  getArticlesListByBrand(brand: string, category: string): Observable<Article[]>{
    return this.buildURL<Article[]>(`/getArticlesByBrand/${ brand }/${ category }`);
  }

  getQuantityArticles(category: number, article: Article): Observable<number>{
    return this.buildURLPost<number>(`/getQuantityByBrandAndCategory/${ category }`, article);
  }

  getCategoriesList(): Observable<Category[]>{
    return this.buildURL<Category[]>('/getCategories');
  }

  getBrandsList(): Observable<string[]>{
    return this.buildURL<string[]>('/getBrands');
  }

  setArticleToCategory( idCategory: number, article: ArticlePost): Observable<Article> {
    console.log('id', idCategory, 'articulo', article);
    const urlpost = '/setArticleToCategry/' + idCategory;
    return this.buildURLPost<Article>(urlpost, article);
  }

  deleteArticleById(idArticle: number): Observable<Article>{
    return this.buildURL<Article>(`/deleteArticleById/${ idArticle }`);
  }

}
