import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  cancelModal = false;
  value: string | undefined;
  form: FormGroup;
  title = 'A-Math';

  constructor(private formBuilder: FormBuilder, private router: Router, private loginService: LoginService) {
    this.form = this.formBuilder.group({
      Username: [{ value: null, disabled: false }, Validators.required],
      Password: [{ value: null, disabled: false }, Validators.required],
    });
  }

  ngOnInit() {}

  public chackDataAndgohome(): void {
    if (this.form.valid) {
      this.router.navigate(['/home']);
    } else {
      this.cancelModal = true;
    }
  }

  public tohome(): void {
    this.router.navigate(['/home']);
}

public tosignup(): void {
  this.router.navigate(['/signup']);
}

public testapi(): void {
  this.loginService.testapi().subscribe((data) => {
    console.log(data);
  })
}

  visible: boolean = false;
  position: string = 'center';

  showDialog(position: string) {
    this.position = 'center';
    this.visible = true;
  }
}
