import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../../interfaces/ArticleInterface';
import { ArticlesService } from '../../../services/articles.service';
import { MatDialog } from '@angular/material/dialog';
import { SellComponent } from '../sell/sell.component';
import { SellfailComponent } from '../sellfail/sellfail.component';
import { Router } from '@angular/router';
import { TshirtsPageComponent } from '../../pages/tshirts-page/tshirts-page.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() article: Article;
  @Input() category: number;
  quantity: number;
  tshirsts: TshirtsPageComponent;

  constructor(private articleService: ArticlesService, public dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.articleService.getQuantityArticles(this.category, this.article)
    .subscribe((data) => { this.quantity = data; });
  }

  onClick(){
    this.articleService.deleteArticleById(this.article.idArticle)
    .subscribe((data) => {
      this.dialog.open(SellComponent);
      this.router.navigate(['tshitsc']);
     },
      (err) => {
        console.log(err);
        this.dialog.open(SellfailComponent);
       } );
  }
}
