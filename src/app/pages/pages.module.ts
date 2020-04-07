import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessoriesPageComponent } from './accessories-page/accessories-page.component';
import { ComicsPageComponent } from './comics-page/comics-page.component';
import { GlassesPageComponent } from './glasses-page/glasses-page.component';
import { HomeComponent } from './home/home.component';
import { OthersPageComponent } from './others-page/others-page.component';
import { ToysPageComponent } from './toys-page/toys-page.component';
import { TshirtsPageComponent } from './tshirts-page/tshirts-page.component';
import { ComponentsModule } from '../components/components.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AccessoriesPageComponent,
    ComicsPageComponent,
    GlassesPageComponent,
    HomeComponent,
    OthersPageComponent,
    ToysPageComponent,
    TshirtsPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ComponentsModule
  ]
})
export class PagesModule { }
