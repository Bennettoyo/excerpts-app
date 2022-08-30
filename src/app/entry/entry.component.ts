import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
  inputValue = '';
  errorMessage = false;

  constructor(public authService: AuthService, public router: Router) {
  }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.inputValue).subscribe((res) => {
      if (this.authService.isLoggedIn) {
        const redirect = this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl) : 'excerpts';
        this.router.navigateByUrl(redirect);
      } else {
        this.errorMessage = true;
      }
    });
  }
}
