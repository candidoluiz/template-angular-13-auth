import { Injectable, Injector } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { PadraoModalState } from "./padrao-modal-state";
import { PadraoModal1 } from "./padrao-modal1";
import { PadraoModal2 } from "./padrao-modal2";

@Injectable({
    providedIn: 'root',
})
export class PadraoModalManagerService {
    private currentModal: PadraoModalState;

    constructor(private injector: Injector) {      
        //const modal3 = new PadraoModal3(null);
        const modal2 = new PadraoModal2(null, injector);
        const modal1 = new PadraoModal1(modal2, injector);

        this.currentModal = modal1;
    }

    start(formulario: FormGroup) {
        this.currentModal.open(formulario);
    }
}