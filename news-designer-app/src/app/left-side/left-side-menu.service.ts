import { Injectable } from '@angular/core';

@Injectable()
export class LeftSideMenuService {
  isOpen: boolean = false;

  constructor() {

  }

  toggle(): void {
    this.isOpen = !this.isOpen;
  }

  _menuItems: MenuItem[] = <MenuItem[]><unknown>[
    {
        title: 'Главная',
        route: 'home',
        icon: 'fa-home'        
    },
        
    {
        title: 'Пользователи',
        route: '/users',
        icon: 'fa-users',
       
        menu: [

        ]
    }];

  
}

export interface MenuItem {
  title: string;
  route?: string;
  command?: string;
  icon: string;
  menu: MenuItem[];
  showMenuForRoute?: string;

  count?: number;
}
