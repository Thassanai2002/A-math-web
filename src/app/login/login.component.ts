import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.form = this.formBuilder.group({
      Username: [{ value: null, disabled: false }, Validators.required],
      Password: [{ value: null, disabled: false }, Validators.required],
    });
  }

  ngOnInit() {}

  public chackDataAndback(): void {
    if (this.form.valid) {
      this.router.navigate(['/home']);
    } else {
      this.cancelModal = true;
    }
  }

  public tohome(): void {
    this.router.navigate(['/home']);
}

  visible: boolean = false;
  position: string = 'center';

  showDialog(position: string) {
    this.position = 'center';
    this.visible = true;
  }
}
