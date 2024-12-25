import { Component, OnInit } from '@angular/core';
import { ModalManagerService } from './test/modal-manager.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

    formulario: FormGroup

    constructor(
        private modalManager: ModalManagerService,
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
