import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  burgerState: boolean = true; // open
  userState: boolean = false; // close
  

  constructor(
  
    public router: Router,
  
  ) {
  }

  ngOnInit() {
  //  setTimeout(() => {
    //  this.user = this.authService.getDefaultUser();
    //}, 100);
  }

  logOut(){
//    this.authService.logOut();
    this.router.navigate(['/auth']);
  }

  ngOnDestroy() {
  }

}
