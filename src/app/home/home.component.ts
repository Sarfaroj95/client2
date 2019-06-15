import { Component, OnInit } from "@angular/core";
import { ToastrManager } from "ng6-toastr-notifications";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  name: string;
  dob: string;
  email: string;
  pass: string;

  constructor(private router: Router, public toastr: ToastrManager) {
    this.name = localStorage.getItem("name");
    this.dob = localStorage.getItem("dob");
    this.email = localStorage.getItem("email");
    this.pass = localStorage.getItem("password");
    if (this.name == null) {
      this.router.navigate(["/login"]);
    }

    // console.log(this.name, this.dob, this.email, this.pass);
  }

  ngOnInit() {}

  logOut() {
    localStorage.clear();
    this.toastr.successToastr("LogOut Successfully.", "Success!");
    this.router.navigate(["/login"]);
  }
}
