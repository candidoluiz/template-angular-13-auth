import { Injectable } from "@angular/core";
import { ModalState } from "./modal-state";
import { Modal1 } from "./modal1";
import { Modal2 } from "./modal2";
import { Modal3 } from "./modal3";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FormGroup } from "@angular/forms";

@Injectable({
    providedIn: 'root',
})
export class ModalManagerService {
    private currentModal: ModalState;

    constructor(private modalService: NgbModal) {      
        const modal3 = new Modal3(null);
        const modal2 = new Modal2(modal3);
        const modal1 = new Modal1(modal2);

        this.currentModal = modal1;
    }

    start(formulario: FormGroup) {
        this.currentModal.open(this.modalService, formulario);
    }
}