import { Component, OnInit } from '@angular/core';
import { Article } from 'src/interfaces/ArticleInterface';
import { ArticlesService } from 'src/services/articles.service';

@Component({
  selector: 'app-others-page',
  templateUrl: './others-page.component.html',
  styleUrls: ['./others-page.component.css']
})
export class OthersPageComponent implements OnInit {

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
    this.articleService.getArticlesListByBrand('Marvel', '6')
    .subscribe(
      (dataMarvel) => {
        this.articlesMarvel = dataMarvel;
      },
      (err) => {console.log(err); }
    );
  }

  getArticlesDC(){
    this.articleService.getArticlesListByBrand('DC', '6')
    .subscribe(
      (dataDC) => {
        this.articlesDc = dataDC;
      },
      (err) => {console.log(err); }
    );
  }

  getArticlesOthers(){
    this.articleService.getArticlesListByBrand('Other', '6')
    .subscribe(
      (dataOthers) => {
        this.articlesOthers = dataOthers;
      },
      (err) => {console.log(err); }
    );
  }
}
