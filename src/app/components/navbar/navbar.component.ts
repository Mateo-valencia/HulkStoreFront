import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Category } from 'src/interfaces/CategoryInterface';
import { ArticlesService } from '../../../services/articles.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  categories: Category[];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private articlesService: ArticlesService) {}

  ngOnInit(): void {
    this.articlesService.getCategoriesList()
    .subscribe(
      (data) => {
        this.categories = data;
      },
      (err) => {console.log(err); }
    );
  }

}
