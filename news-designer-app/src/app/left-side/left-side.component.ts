import {Component, Inject, OnInit, Optional, ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';


import {DOCUMENT} from "@angular/common";
import { MenuItem } from './left-side-menu.service';


@Component({
  selector: 'app-left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.scss'],
  //providers: [LeftSideMenuService],
})
export class LeftSideComponent implements OnInit {

  menu: MenuItem[] | iMenuItem[];

  activeItem: boolean;

  constructor(    
    //public leftSideMenuService: LeftSideMenuService,
    @Inject(DOCUMENT) private document: Document,
    public router: Router,
    ) {
  }

  ngOnInit() {
    
    this.getMenu();
  }

  clickItem(item: iMenuItem){
    this.menu.filter((_item: iMenuItem)=>{
      if (item.title == _item.title) {
        _item.showMenu = !_item.showMenu;
        return false;
      }
      _item.showMenu = false;
    })
  }

  getMenu() {
  
  }

  go(item: iMenuItem, mainItem: iMenuItem){
    if (!item.route) { return; }

    this.clearStatusMenu();

    mainItem.showMenu = false;
    mainItem.active = true;
    this.router.navigate([item.route]);
  }

  ngOnDestroy() {
  }

  clearStatusMenu() {
    this.menu.filter((item: iMenuItem)=>{
      item.showMenu = false;
      item.active = false;
    });
  }

}

export interface iMenuItem extends MenuItem{
  showMenu: boolean;
  active: boolean;
}