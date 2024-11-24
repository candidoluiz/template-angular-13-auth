import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ModalState } from "./modal-state";
import { Modal2Component } from "./modal2component";
import { FormGroup } from "@angular/forms";

export class Modal2 implements ModalState {
    next: ModalState;

    constructor(next: ModalState) {
        this.next = next;
    }

    open(modalService: NgbModal, formulario: FormGroup) {
        if (this.shouldOpen()) {
            const modalRef = modalService.open(Modal2Component);
            modalRef.result.then(
                (result) => {
                    // Verificação de validação do Modal2
                    if (this.validarFormulario(formulario)) {
                        console.log('Validação do Modal2 passou');
                        this.close(modalService, formulario); // Se passar na validação, continua para o próximo modal
                    } else {
                        console.log('Validação do Modal2 falhou');
                        // Aqui o fluxo pode ser interrompido ou tomar outra ação, como exibir um alerta
                        // Não chamamos o próximo modal, interrompendo o fluxo
                    }
                },
                (reason) => {
                    this.close(modalService, formulario)
                }
            );
        } else if (this.next) {
            this.next.open(modalService, formulario);
        }
    }

    close(modalService: NgbModal, formulario: FormGroup) {
        console.log("Fechando Modal 2");
        if (this.next) {
            this.next.open(modalService, formulario);
        }
    }

    shouldOpen(): boolean {
        return true;  // Condição para abrir o modal
    }

    // Validação do formulário no Modal2
    validarFormulario(formulario: FormGroup): boolean {
        if (formulario.invalid) {
            // Adicione lógica de exibição de erro, se necessário
            console.log('O formulário do Modal2 é inválido!');
            return false;
        }
        return true;
    }
}