import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from '../app-routing.module';
import { CardComponent } from './card/card.component';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SellComponent } from './sell/sell.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SellfailComponent } from './sellfail/sellfail.component';



@NgModule({
  declarations: [
    NavbarComponent,
    CardComponent,
    SellComponent,
    SellfailComponent
  ],
  entryComponents: [SellComponent],
  exports: [
    NavbarComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatDialogModule
  ]
})
export class ComponentsModule { }
