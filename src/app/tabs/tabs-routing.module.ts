import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'Inicio',
        loadChildren: () => import('../Inicio/Inicio.module').then(m => m.InicioPageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('../pagina-perfil/pagina-perfil.module').then(m => m.PaginaPerfilPageModule)
      },
      {
        path: 'otro',
        loadChildren: () => import('../otro/otro-routing.module').then(m => m.OtroPageRoutingModule)
      },
      {
        path: '',
        redirectTo: '/tabs/Inicio',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/Inicio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
