import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PagesComponentComponent } from "./pages/pages-component/pages-component.component";


const routes: Routes = [


  {
    path: '',
    redirectTo: 'sign-in',  // es para que al inicio se coloque la pagina
    pathMatch: 'full'
  },

  {
    //esto siginfica que los hijos de este componente tendran todo el footer
    path: '',
    component: PagesComponentComponent, children: [
        { path: 'pase', loadChildren: () => import('./pages/pase/pase.module').then(m => m.PaseModule) },
    ]
  },


  //y este es para las rutas que no quiero que se vea el footer o otras cosas compartidas
  { path:'sign-in',loadChildren:()=>import('./pages/sign-in/sign-in.module').then(m=>m.SignInModule)},

  { path:'pase',loadChildren:()=>import('./pages/pase/pase.module').then(m=>m.PaseModule)},


];








@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})


export class AppRoutingModule { }
