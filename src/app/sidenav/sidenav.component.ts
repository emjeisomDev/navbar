import { Component } from '@angular/core';
import { navbarData } from './nav-data';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  colapsed = true;
  navData = navbarData;

  closeSidenav():void{

  }

  toggleCollapse():void{
    
  }

}