import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup
  loading = false


  constructor(private fb: FormBuilder, private snackBar: MatSnackBar, private router: Router
  ) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {

  }

  ingresar() {
    const us = this.form.value.usuario
    const pw = this.form.value.password
    if (us == "augusto255" && pw == "123456789") {
      this.succes()
      this.fakeLoading()
    }
    else {
      this.error();
      this.form.reset()
    }
  }

  error() {
    this.snackBar.open('Usuario o contraseña incorrectos', '', {
      duration: 1500,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  succes() {
    this.snackBar.open('Se ingreso Correctamente!', '', {
      duration: 1500,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  fakeLoading() {
    this.loading = true,
      setTimeout(() => {
        this.router.navigate(['dashboard'])
        this.loading = false
      }, 1500);
  }

}
