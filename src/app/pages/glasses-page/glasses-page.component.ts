import { Component, OnInit } from '@angular/core';
import { Article } from 'src/interfaces/ArticleInterface';
import { ArticlesService } from 'src/services/articles.service';

@Component({
  selector: 'app-glasses-page',
  templateUrl: './glasses-page.component.html',
  styleUrls: ['./glasses-page.component.css']
})
export class GlassesPageComponent implements OnInit {

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
    this.articleService.getArticlesListByBrand('Marvel','2')
    .subscribe(
      (dataMarvel) => {
        console.log('Marvel', dataMarvel);
        this.articlesMarvel = dataMarvel;
      },
      (err) => {console.log(err); }
    );
  }

  getArticlesDC(){
    this.articleService.getArticlesListByBrand('DC', '2')
    .subscribe(
      (dataDC) => {
        console.log('DC', dataDC);
        this.articlesDc = dataDC;
      },
      (err) => {console.log(err); }
    );
  }

  getArticlesOthers(){
    this.articleService.getArticlesListByBrand('Other', '2')
    .subscribe(
      (dataOthers) => {
        console.log('DC', dataOthers);
        this.articlesOthers = dataOthers;
      },
      (err) => {console.log(err); }
    );
  }


}
