import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'], // also fixed styleUrl to styleUrls
})
export class HomeComponent {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.form = this.formBuilder.group({
      PasswordRoom: [{ value: null, disabled: false }],
    });
  }

  public ngOnInit(): void {}

  public Join(): void {
    this.router.navigate(['/room']);
  }

  public create(): void {
    this.router.navigate(['/room']);
  }

}
