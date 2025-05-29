import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginLayoutComponent } from './core/Layout/login-layout/login.component';
import { BaseLayoutComponent } from './core/Layout/base-layout/base-layout.component';
import { AuthGuard } from './core/auth/auth.guard';

const routes: Routes = [
    {
        path: 'login', component: LoginLayoutComponent, children: [
            { path: '', loadChildren: () => import('./pages/login-box/login-box.module').then(m => m.LoginBoxModule) },
            { path: 'login-callback', loadChildren: () => import('./pages/login-callback/login-callback.module').then(m => m.LoginCallbackModule) },
        ]
    },
    {
        path: '', component: BaseLayoutComponent,
        canActivate: [AuthGuard],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
            { path: 'configuracao', loadChildren: () => import('./pages/configuracao/configuracao.module').then(m => m.ConfiguracaoModule) },
        ]
    },
    { path: '**', redirectTo: 'dashboard' }
];


@NgModule({
    imports: [RouterModule.forRoot(routes,
        {
            scrollPositionRestoration: 'enabled',
            anchorScrolling: 'enabled',
            relativeLinkResolution: 'legacy'
        })],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class AppRoutingModule {
}
