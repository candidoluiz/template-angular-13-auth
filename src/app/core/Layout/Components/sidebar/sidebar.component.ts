import {Component, HostListener, OnInit} from '@angular/core';
import {ThemeOptions} from '../../../../theme-options';
import {BehaviorSubject, Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import { ISeparador, MenuItems } from 'src/app/core/menu-item/menu-item';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  public extraParameter: any;
  separadores: ISeparador[] = [];
  menuAsBehaviorSubject: BehaviorSubject<ISeparador[]> = null;
  menuAsObservable: Observable<ISeparador[]> = null;

  constructor(
    public globals: ThemeOptions, 
    private activatedRoute: ActivatedRoute, 
    private menuItems: MenuItems) {
  }


  private newInnerWidth: number;
  private innerWidth: number;
  activeId = 'dashboardsMenu';

  toggleSidebar() {
    this.globals.toggleSidebar = !this.globals.toggleSidebar;
  }

  sidebarHover() {
    this.globals.sidebarHover = !this.globals.sidebarHover;
  }

  ngOnInit() {
    setTimeout(() => {
        this.montarMenu();
      this.innerWidth = window.innerWidth;
      if (this.innerWidth < 1200) {
        this.globals.toggleSidebar = true;
      }
    });

    // this.extraParameter = this.activatedRoute.snapshot.firstChild.data.extraParameter;

  }

  montarMenu() {
    this.separadores = this.menuItems.getAll();
    this.menuAsBehaviorSubject = new BehaviorSubject<ISeparador[]>(this.separadores);
    this.menuAsObservable = this.menuAsBehaviorSubject.asObservable();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.newInnerWidth = event.target.innerWidth;

    if (this.newInnerWidth < 1200) {
      this.globals.toggleSidebar = true;
    } else {
      this.globals.toggleSidebar = false;
    }

  }
}
