import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'FOXBEL MUSIC',
      description: 'Escucha tus canciones favoritas'
    },
    loadChildren: () =>
      import('./modules/content/content.module').then((m) => m.ContentModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
