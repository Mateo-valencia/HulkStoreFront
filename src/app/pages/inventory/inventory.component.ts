import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MessagesuccesComponent } from '../messagesucces/messagesucces.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ArticlesService } from '../../../services/articles.service';
import { Category } from '../../../interfaces/CategoryInterface';
import { Article, ArticlePost } from '../../../interfaces/ArticleInterface';
import { CloseScrollStrategy } from '@angular/cdk/overlay';
import { MessagefailComponent } from '../messagefail/messagefail.component';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit{

  categories: Category[];
  article: ArticlePost = { reference: ' ', price: ' ', brand: ''};
  brands: string[];

  inventoryForm = new FormGroup({
    categoryArticle: new FormControl('', [Validators.required]),
    referenceArticle: new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(15)]),
    priceArticle: new FormControl('', [Validators.required, Validators.minLength(4)]),
    brandArticle: new FormControl('', [Validators.required]),
  });

  get form() { return this.inventoryForm.controls; }

  constructor(public dialog: MatDialog, private articlesService: ArticlesService) {}

  ngOnInit(): void {
    this.getCategoriesList();
    this.getBrandList();
  }

  getCategoriesList(){
    this.articlesService.getCategoriesList()
    .subscribe(
      (data) => {
        this.categories = data;
      },
      (err) => {console.log(err); }
    );
  }

  getBrandList(){
    this.articlesService.getBrandsList()
    .subscribe(
      (dataBrands) => {
        this.brands = dataBrands;
      },
      (err) => {console.log(err); }
    );
  }

  onClick(){
    this.article.reference = this.inventoryForm.value.referenceArticle;
    this.article.brand = this.inventoryForm.value.brandArticle;
    this.article.price = this.inventoryForm.value.priceArticle;
    this.articlesService.setArticleToCategory(this.inventoryForm.value.categoryArticle, this.article)
    .subscribe(
      (data) => {this.dialog.open(MessagesuccesComponent); },
      (err) => {console.log(err); this.dialog.open(MessagefailComponent); }
    );
    this.inventoryForm.reset();
  }
}

