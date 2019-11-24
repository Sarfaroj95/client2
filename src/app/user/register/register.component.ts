import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../share/service.service";
import { Router } from "@angular/router";
import { ToastrManager } from "ng6-toastr-notifications";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    public toastr: ToastrManager
  ) {}

  register() {
    console.log(this.registerForm.value);
    var input = this.registerForm.value;

    this.auth.register(input).subscribe(
      result => {
        this.toastr.successToastr("Registered Successfully.", "Success!");
        this.router.navigate(["/login"]);
      },
      error => {
        // this.toastr.errorToastr("Something went wrong.", "Oops!");
        let er = error.error.errors[0];
        this.toastr.errorToastr(er.details, er.title);
        console.log("somethign went wrong");
      }
    );
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.registerForm = this.fb.group({
      username: ["", Validators.required],

      email: [
        "",
        [
          Validators.required,
          Validators.pattern(
            "^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$"
          )
        ]
      ],
      birthday: ["", Validators.required],
      password: ["", Validators.required]
      //  passwordConfirmation: []
    });
  }
}
