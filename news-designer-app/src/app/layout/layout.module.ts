import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';


import { BurgerDirective } from './directives/burger.directive';


@NgModule({
  declarations: [
    LayoutComponent,
    //HeaderComponent,    
    BurgerDirective
  ],
  imports: [
    
  ],
  exports: [
    //LayoutComponent
    //HeaderComponent
  ],
  providers: [    
  ]
})
export class LayoutModule {
}
