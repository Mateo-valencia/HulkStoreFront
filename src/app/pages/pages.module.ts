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
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MessagesuccesComponent } from './messagesucces/messagesucces.component';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { MessagefailComponent } from './messagefail/messagefail.component';

@NgModule({
  declarations: [
    AccessoriesPageComponent,
    ComicsPageComponent,
    GlassesPageComponent,
    OthersPageComponent,
    ToysPageComponent,
    TshirtsPageComponent,
    InventoryComponent,
    MessagesuccesComponent,
    MessagefailComponent
  ],
  entryComponents: [MessagesuccesComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ComponentsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule
  ]
})
export class PagesModule { }
