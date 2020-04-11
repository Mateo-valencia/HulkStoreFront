import { Component, OnInit, AfterContentInit } from '@angular/core';
import { ArticlesService } from '../../../services/articles.service';
import { Article } from '../../../interfaces/ArticleInterface';

@Component({
  selector: 'app-tshirts-page',
  templateUrl: './tshirts-page.component.html',
  styleUrls: ['./tshirts-page.component.css']
})
export class TshirtsPageComponent implements OnInit {

  public articlesMarvel: Article[];
  public articlesDc: Article[];
  public articlesOthers: Article[];

  constructor(private articleService: ArticlesService) { }

  ngOnInit(): void {
    this.getArticlesMarvel();
    this.getArticlesDC();
    this.getArticlesOthers();
  }

  getArticlesMarvel() {
    this.articleService.getArticlesListByBrand('Marvel', '1')
    .subscribe(
      (dataMarvel) => {
        this.articlesMarvel = dataMarvel;
      },
      (err) => {console.log(err); }
    );
  }

  getArticlesDC(){
    this.articleService.getArticlesListByBrand('DC', '1')
    .subscribe(
      (dataDC) => {
        this.articlesDc = dataDC;
      },
      (err) => {console.log(err); }
    );
  }

  getArticlesOthers(){
    this.articleService.getArticlesListByBrand('Other', '1')
    .subscribe(
      (dataOthers) => {
        this.articlesOthers = dataOthers;
      },
      (err) => {console.log(err); }
    );
  }

}
