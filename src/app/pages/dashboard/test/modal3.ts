import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ModalState } from "./modal-state";
import { Modal3Component } from "./modal3component";
import { FormGroup } from "@angular/forms";

export class Modal3 implements ModalState {
    next: ModalState;

    constructor(next: ModalState) {
        this.next = next;
    }

    open(modalService: NgbModal, formulario: FormGroup) {
        if (this.shouldOpen()) {
            const modalRef = modalService.open(Modal3Component);
            modalRef.result.then(
                () => this.close(modalService, formulario),
                () => this.close(modalService, formulario)
            );
        } else if (this.next) {
            this.next.open(modalService, formulario);
        }
    }

    close(modalService: NgbModal, formulario: FormGroup) {
        console.log("Fechando Modal 3");
        if (this.next) {
            this.next.open(modalService, formulario);
        }
    }

    shouldOpen(): boolean {
        // Coloque aqui a condição para abrir o modal
        return true;
    }
}