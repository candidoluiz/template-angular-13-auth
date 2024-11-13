import {Component, Input} from '@angular/core';
import { faStar, faPlus, faSave } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
})
export class PageTitleComponent {

  faStar = faStar;
  faPlus = faPlus;
  faSave = faSave;

  @Input() heading;
  @Input() subheading;
  @Input() icon;

}
