import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../share/service.service";
import { Router } from "@angular/router";
import { ToastrManager } from "ng6-toastr-notifications";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    public toastr: ToastrManager
  ) {}

  login() {
    console.log(this.loginForm.value);
    let input = this.loginForm.value;

    this.auth.login(input).subscribe(
      result => {
        // console.log("result", result);

        localStorage.setItem("name", result.data.username);
        localStorage.setItem("dob", result.data.birthday);
        localStorage.setItem("email", result.data.email);
        localStorage.setItem("password", result.data.password);

        this.toastr.successToastr("Login Successfully.", "Success!");
        this.router.navigate(["/home"]);
      },
      error => {
        this.toastr.errorToastr("Something went wrong.", "Oops!");
        console.log("somethign went wrong");
      }
    );
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.fb.group({
      email: [
        "",
        [
          Validators.required,
          Validators.pattern(
            "^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$"
          )
        ]
      ],

      password: [""]
    });
  }

  //   login() {
  //     console.log(this.loginForm.value);
  //   }
}
