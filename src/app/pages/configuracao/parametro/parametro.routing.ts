import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParametroComponent } from './parametro.component';


const routes: Routes = [
    {
        path: '', component: ParametroComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ParametroRoutingModule { }
