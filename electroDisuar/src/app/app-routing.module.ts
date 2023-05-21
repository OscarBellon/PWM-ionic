import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'catalogo',
    loadChildren: () => import('./catalogo/catalogo.module').then( m => m.CatalogoPageModule)
  },

  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'favourites',
    loadChildren: () => import('./favourites/favourites.module').then( m => m.FavouritesPageModule)
  },
  {
    path: 'detalle',
    loadChildren: () => import('./detalle/detalle.module').then( m => m.DetallePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
