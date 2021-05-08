import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CoreService } from 'src/services/core-service.service';
import { DatastoreService } from 'src/services/datastore.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

   username : string = ""
   password : string = ""

  constructor(private router : Router, private route : ActivatedRoute , private coreService : CoreService , private dataService : DatastoreService) { }

  ngOnInit() {
  }

  login()
  {

    console.log("Inside : login")

    if(this.coreService.authenticateLogin(this.username , this.password))
    {
      console.log("AUTHENTICATION DONE")
      this.dataService.IsUserAuthenticated = true;
      this.router.navigate(["/admin-panel"],{relativeTo:this.route})
    }
    else
    {
      console.log("RESET FIELDS")
      this.username = ""
      this.password = ""
    }
  }

}
