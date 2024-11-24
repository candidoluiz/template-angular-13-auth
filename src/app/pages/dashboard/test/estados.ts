import { ModalState } from "./modal-state";

export abstract class Estado extends ModalState {
    formulario;

    setDados(formulario) {
        this.formulario = formulario
    }

    teste():boolean{
        return this.formulario?.teste;
    }

}