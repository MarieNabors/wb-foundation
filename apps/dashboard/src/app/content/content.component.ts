import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@workshop/core-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  isLoggedIn$: Observable<boolean> = this.authService.isAuthenticated$;
  isLoggedIn;

constructor(
   private authService: AuthService,
   private router: Router
  ) { }

  ngOnInit() {

    this.isLoggedIn$
    
      this.router.navigate(['content']);
  
    // getWidgets($event) {
    //   return;
    // this.router.navigate(['']);
    };
  }

