import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal1',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Modal 2</h4>
      <button type="button" class="btn-close" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      Conteúdo do Modal 2
    </div>
      <div class="modal-footer">
          <button type="button" class="btn btn-secondary" (click)="onFecharEvent.emit()">Close</button>
          <button type="button" class="mr-2 btn-icon btn btn-info"><i class="pe-7s-diskette btn-icon-wrapper"></i>Salvar</button>
          <button type="button" class="mr-2 btn-icon btn btn-outline-info"><i class="pe-7s-search btn-icon-wrapper"></i>Pesquisar</button>
          <button type="button" class="mr-2 btn-icon btn btn-warning"><i class="pe-7s-info btn-icon-wrapper"></i>Detalhes</button>
          <button type="button" class="mr-2 btn-icon btn btn-success"><i class="pe-7s-print btn-icon-wrapper"></i>Imprimir</button>
          <button type="button" class="mr-2 btn-icon btn btn-success"><i class="pe-7s-look btn-icon-wrapper"></i>Visualizar</button>
          <button type="button" class="mr-2 btn-icon btn btn-danger"><i class="pe-7s-trash btn-icon-wrapper"></i>Excluir</button>
          <button type="button" class="mr-2 btn-icon btn btn-danger"><i class="pe-7s-close-circle btn-icon-wrapper"></i>Cancelar</button>
      </div>
  `
})
export class Modal2Component {
    @Output() onFecharEvent: EventEmitter<any> = new EventEmitter<any>();


}