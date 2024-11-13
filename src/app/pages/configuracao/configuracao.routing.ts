import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',       
        children: [
            { path: 'parametro',loadChildren: () => import('./parametro/parametro.module').then(m => m.ParametroModule) },
            //{ path: 'perfil',loadChildren: () => import('./parametro/parametro.module').then(m => m.ParametroModule) },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ConfiguracaoRoutingModule { }
