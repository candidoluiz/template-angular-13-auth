import { Component } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal1',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Modal 2</h4>
      <button type="button" class="close" aria-label="Close" (click)="closeModal()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      Conteúdo do Modal 2
    </div>
  `
})
export class Modal2Component {
  constructor(private modalService: NgbActiveModal) {}

  closeModal() {
    this.modalService.close();
  }
}