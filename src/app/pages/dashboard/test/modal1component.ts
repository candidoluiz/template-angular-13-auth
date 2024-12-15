import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal1',
  template: `
                <div class="modal-header">
                    <h4 class="modal-title">Modal title</h4>
                </div>
                <div class="modal-body">
                    <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                    Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.
                    Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    </p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" (click)="closeModal()">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
  `
})

export class Modal1Component {
  constructor(private modalService: NgbModal) {}

  closeModal() {
    this.modalService.dismissAll();
  }
}

