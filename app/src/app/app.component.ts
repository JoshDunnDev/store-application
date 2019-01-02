import { AppUser } from './models/app-user';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {

  appUser: AppUser;

  constructor(private userService: UserService, private auth: AuthService, private router: Router) {
    auth.user$.subscribe(user => {
      setTimeout(() => {
        if (user) {
          auth.appUser$.subscribe(appUser => this.appUser = appUser);
          let returnUrl = localStorage.getItem('returnUrl');
          router.navigateByUrl(returnUrl);
          userService.save(user);
        }
      }, 1000) 
    });


  }

  searchText = '';
  toggleHide = false;

  onEnterPressed() {
    this.router.navigate(["store/search/", this.searchText]);
    this.searchText = '';
  }

  logout() {
    this.auth.logout();
  }

  autoCloseDropdown(event) {
    let target = event.target;
    if (!target.closest(".logged-in-dropdown")) { 
      this.toggleHide = false;
    }
  }
}
