import { Component, OnInit } from '@angular/core';
import { Article } from 'src/interfaces/ArticleInterface';
import { ArticlesService } from 'src/services/articles.service';

@Component({
  selector: 'app-toys-page',
  templateUrl: './toys-page.component.html',
  styleUrls: ['./toys-page.component.css']
})
export class ToysPageComponent implements OnInit {

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
    this.articleService.getArticlesListByBrand('Marvel', '4')
    .subscribe(
      (dataMarvel) => {
        console.log('Marvel', dataMarvel);
        this.articlesMarvel = dataMarvel;
      },
      (err) => {console.log(err); }
    );
  }

  getArticlesDC(){
    this.articleService.getArticlesListByBrand('DC', '4')
    .subscribe(
      (dataDC) => {
        console.log('DC', dataDC);
        this.articlesDc = dataDC;
      },
      (err) => {console.log(err); }
    );
  }

  getArticlesOthers(){
    this.articleService.getArticlesListByBrand('Other', '4')
    .subscribe(
      (dataOthers) => {
        console.log('DC', dataOthers);
        this.articlesOthers = dataOthers;
      },
      (err) => {console.log(err); }
    );
  }
}
