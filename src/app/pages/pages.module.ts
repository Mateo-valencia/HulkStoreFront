import { NgModule } from '@angular/core';
import { AccessoriesPageComponent } from './accessories-page/accessories-page.component';
import { ComicsPageComponent } from './comics-page/comics-page.component';
import { GlassesPageComponent } from './glasses-page/glasses-page.component';
import { OthersPageComponent } from './others-page/others-page.component';
import { ToysPageComponent } from './toys-page/toys-page.component';
import { TshirtsPageComponent } from './tshirts-page/tshirts-page.component';
import { ComponentsModule } from '../components/components.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { InventoryComponent } from './inventory/inventory.component';

@NgModule({
  declarations: [
    AccessoriesPageComponent,
    ComicsPageComponent,
    GlassesPageComponent,
    OthersPageComponent,
    ToysPageComponent,
    TshirtsPageComponent,
    InventoryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ComponentsModule,
    HttpClientModule
  ]
})
export class PagesModule { }
