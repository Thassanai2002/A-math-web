import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  cancelModal = false;
  value: string | undefined;
  form: FormGroup;
  title = 'A-Math';

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.form = this.formBuilder.group({
      Username: [{ value: null, disabled: false }, Validators.required],
      Password: [{ value: null, disabled: false }, Validators.required],
      repeatPassword: [{ value: null, disabled: false }, Validators.required],
    });
  }

  ngOnInit() {}

  public chackDataAndback(): void {
    if (this.form.valid) {
      this.router.navigate(['/login']);
    } else {
      this.cancelModal = true;
    }
  }

  public toBack(): void {
    this.router.navigate(['/login']);
}

public tologin(): void {
  this.router.navigate(['/login']);
}

  visible: boolean = false;
  position: string = 'center';

  showDialog(position: string) {
    this.position = 'center';
    this.visible = true;
  }

}
