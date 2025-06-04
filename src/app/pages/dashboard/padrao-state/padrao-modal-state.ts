import { FormGroup } from "@angular/forms";

export abstract class PadraoModalState {

  next: PadraoModalState | null;
  abstract open(formulario: FormGroup): void;
  abstract close(formulario: FormGroup): void;
  abstract shouldOpen(): boolean; // Define se deve abrir o  modal ou pular
}