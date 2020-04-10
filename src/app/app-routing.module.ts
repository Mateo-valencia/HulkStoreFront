import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TshirtsPageComponent } from './pages/tshirts-page/tshirts-page.component';
import { GlassesPageComponent } from './pages/glasses-page/glasses-page.component';
import { ComicsPageComponent } from './pages/comics-page/comics-page.component';
import { ToysPageComponent } from './pages/toys-page/toys-page.component';
import { AccessoriesPageComponent } from './pages/accessories-page/accessories-page.component';
import { OthersPageComponent } from './pages/others-page/others-page.component';
import { InventoryComponent } from './pages/inventory/inventory.component';



const routes: Routes = [
  { path: 'tshits',
    component: TshirtsPageComponent
  },
  { path: 'glasses',
    component: GlassesPageComponent
  },
  { path: 'comics',
  component: ComicsPageComponent},
  { path: 'toys',
  component: ToysPageComponent},
  { path: 'accessories',
  component: AccessoriesPageComponent},
  { path: 'others',
  component: OthersPageComponent},
  { path: 'inventory',
  component: InventoryComponent},
  { path: ' ',
    component: TshirtsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
