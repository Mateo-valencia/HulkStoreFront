import { Component, OnInit, AfterContentInit } from '@angular/core';
import { ArticlesService } from '../../../services/articles.service';
import { Article } from '../../../interfaces/ArticleInterface';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-tshirts-page',
  templateUrl: './tshirts-page.component.html',
  styleUrls: ['./tshirts-page.component.css']
})
export class TshirtsPageComponent implements OnInit {

  private articlesObtained: Article[];
  public articlesMarvel: Article[];
  public articlesDc: Article[];
  public articlesOthers: Article[];

  constructor(private articleService: ArticlesService) { }

  ngOnInit(): void {
    this.getArticlesMarvel();
    this.getArticlesDC();
    this.getArticlesOthers();
  }

  getArticles() {
    this.articleService.getArticlesList()
    .subscribe((data) => {
      console.log(data);
      this.articlesObtained = data;
    },
    (err) => {console.log(err); }
    );
  }

  getArticlesMarvel() {
    this.articleService.getArticlesListByBrand('Marvel')
    .subscribe(
      (dataMarvel) => {
        console.log('Marvel', dataMarvel);
        this.articlesMarvel = dataMarvel;
      },
      (err) => {console.log(err); }
    );
  }

  getArticlesDC(){
    this.articleService.getArticlesListByBrand('DC')
    .subscribe(
      (dataDC) => {
        console.log('DC', dataDC);
        this.articlesDc = dataDC;
      },
      (err) => {console.log(err); }
    );
  }

  getArticlesOthers(){
    this.articleService.getArticlesListByBrand('Other')
    .subscribe(
      (dataOthers) => {
        console.log('DC', dataOthers);
        this.articlesOthers = dataOthers;
      },
      (err) => {console.log(err); }
    );
  }

}
