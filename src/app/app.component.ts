import { Component } from '@angular/core';
import { SideNavToggle } from './sidenavtoggle.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'navbar';

  iSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(data: SideNavToggle):void{
    this.screenWidth = data.screenWidth;
    this.iSideNavCollapsed = data.collapsed;
  }

}
