import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/firebase.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private auth: FirebaseService ) { 
  }
 
  ngOnInit(): void {
  }

  login(){
    this.auth.login('mauglis','nugaletojas');
  }

popup = false;
}


