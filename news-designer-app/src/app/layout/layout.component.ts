import { Component, OnInit } from '@angular/core';

// import {Router} from '@angular/router';
// import {AuthService} from '../authorization/services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

    constructor(
        // public authService: AuthService,
        // public router: Router
        
    ) {
    }

    ngOnInit() {
      // setTimeout(()=>{
      //   this.authService.getDefaultUser();
      // }, 100);
    }

    ngOnDestroy() {
    }

}
