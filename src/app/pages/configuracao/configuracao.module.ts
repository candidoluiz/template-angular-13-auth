import { NgModule } from '@angular/core';
import { ConfiguracaoComponent } from './configuracao.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConfiguracaoRoutingModule } from './configuracao.routing';



@NgModule({
  declarations: [
    ConfiguracaoComponent
  ],
  imports: [
    SharedModule,
    ConfiguracaoRoutingModule
  ]
})
export class ConfiguracaoModule { }
