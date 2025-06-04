import { FormGroup } from "@angular/forms";
import { PadraoModalState } from "./padrao-modal-state";
import { PadraoEstado } from "./padrao-estados";
import { Injector } from "@angular/core";
import { Modal1Component } from "../test/modal1component";

export class PadraoModal1 extends PadraoEstado {
    next: PadraoModalState;

    constructor(next: PadraoModalState, protected override injector: Injector) {
        super(injector);
        this.next = next;
    }

    open(formulario: FormGroup) {
        if (this.shouldOpen()) {
            console.log("Abrindo Modal 1");
            const componente = this.modal.open(Modal1Component, {backdrop: 'static'});
            const modalComponente = componente.componentInstance as Modal1Component;
            modalComponente.formulario = formulario;
            modalComponente.onFecharEvent.subscribe(() => this.avancar(formulario, componente));

        } else if (this.next) {
            this.next.open(formulario);
        }
    }

    close(formulario: FormGroup) {
        console.log("Fechando Modal 1");
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