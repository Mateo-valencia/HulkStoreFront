import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Category } from '../../../interfaces/Category';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  categories: Category[] = [{name: 'Tshirts', url: 'tshits', icon: 'loyalty'},
  {name: 'glasses', url: 'glasses', icon: 'free_breakfast'},
  {name: 'Comics', url: 'comics', icon: 'bookmarks'},
  {name: 'Toys', url: 'toys', icon: 'toys'},
  {name: 'accessories', url: 'accessories', icon: 'loyalty'},
  {name: 'Others', url: 'others', icon: 'dynamic_feed'}];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

}
