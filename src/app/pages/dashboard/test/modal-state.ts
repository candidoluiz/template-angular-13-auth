import { FormGroup } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

export abstract class ModalState {

    next: ModalState | null;
    abstract open(modalService: NgbModal, formulario: FormGroup): void;
    abstract close(modalService: NgbModal, formulario: FormGroup): void;
    abstract shouldOpen(): boolean; // Define se deve abrir o próximo modal ou pular
  }