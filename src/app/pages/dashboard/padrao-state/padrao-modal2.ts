import { FormGroup } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { PadraoModalState } from "./padrao-modal-state";
import { PadraoEstado } from "./padrao-estados";
import { Injector } from "@angular/core";
import { Modal2Component } from "../test/modal2component";

export class PadraoModal2 extends PadraoEstado {
    next: PadraoModalState;

    constructor(next: PadraoModalState, protected override injector: Injector) {
        super(injector);
        this.next = next;
    }

    open(formulario: FormGroup) {
        if (this.shouldOpen()) {
            console.log("Abrindo Modal 2");
            const componente = this.modal.open(Modal2Component, { backdrop: 'static' });
            const modalComponente = componente.componentInstance as Modal2Component;
            modalComponente.onFecharEvent.subscribe(() => this.avancar(formulario, componente))

        } else if (this.next) {
            this.next.open(formulario);
        }
    }

    close(formulario: FormGroup) {
        console.log("Fechando Modal 2");
        if (this.next) {
            this.next.open(formulario);
        }
    }

    shouldOpen(): boolean {
        // Coloque aqui a condição para abrir o modal
        return true;
    }

    avancar(formulario, componente) {
        componente.close()
        this.close(formulario);
    }
}