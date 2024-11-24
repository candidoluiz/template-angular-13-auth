import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ModalState } from "./modal-state";
import { Modal1Component } from "./modal1component";
import { FormGroup } from "@angular/forms";
import { Estado } from "./estados";

export class Modal1 extends Estado {
    next: ModalState;

    constructor(next: ModalState) {       
        super();
        this.next = next;
    }

    open(modalService: NgbModal, formulario: FormGroup) {
        if (this.shouldOpen()) {
            const modalRef = modalService.open(Modal1Component);
            modalRef.result.then(
                () => this.close(modalService, formulario),
                () => this.close(modalService, formulario)
            );
        } else if (this.next) {
            this.next.open(modalService, formulario);
        }
    }

    close(modalService: NgbModal, formulario: FormGroup) {
        console.log("Fechando Modal 1");
        if (this.next) {
            this.next.open(modalService, formulario);
        }
    }

    shouldOpen(): boolean {
        // Coloque aqui a condição para abrir o modal
        return true;
    }
}