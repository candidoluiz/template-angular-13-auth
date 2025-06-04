import { Component, OnInit } from '@angular/core';
import { ModalManagerService } from './test/modal-manager.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PadraoModalManagerService } from './padrao-state/padrao-modal-manager.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

    formulario: FormGroup

    constructor(
        private modalManager: PadraoModalManagerService,
        private fb: FormBuilder
    ) { }

    ngOnInit(): void {
        this.montarFormulario()
    }

    openModals() {
        this.modalManager.start(this.formulario);
    }

    montarFormulario() {
        this.formulario = this.fb.group({
            pill: [true]
        })

    }

}
