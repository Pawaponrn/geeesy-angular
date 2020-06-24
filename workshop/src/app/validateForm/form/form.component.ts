import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  angularForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.angularForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9.@]*')]],
      password: ['', [Validators.required, Validators.minLength(15)]],
      confirmpassword: [''],
      notifyemail: ['email'],
      notifytext: ['text']
    });
  }

  //var firstname = this.userprofileForm.get('firstName').value

}
