import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

const modulos = [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,    
    FontAwesomeModule,
    NgbModule,

]

const componentes = [
    
]

@NgModule({
    imports: [modulos],
    declarations: [componentes],
    exports: [modulos,componentes]
})

export class SharedModule { }