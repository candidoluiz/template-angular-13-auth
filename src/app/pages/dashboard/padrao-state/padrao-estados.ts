import { Injector } from "@angular/core";
import { PadraoModalState } from "./padrao-modal-state";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

export abstract class PadraoEstado extends PadraoModalState {  
    modal: NgbModal;
    //protected msgService: MensagemService;

    constructor(protected injector: Injector) {
        super();
        this.modal = injector.get(NgbModal);
        //this.msgService = this.injector.get(MensagemService);
    }

}