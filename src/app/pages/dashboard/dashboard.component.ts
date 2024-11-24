import { Component, OnInit } from '@angular/core';
import { ModalManagerService } from './test/modal-manager.service';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

    formulario: FormGroup

    constructor(
        private modalManager: ModalManagerService
    ) { }

    ngOnInit(): void {
    }  

    openModals() {
        this.modalManager.start(this.formulario);
      }

}
