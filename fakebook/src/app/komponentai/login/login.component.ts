import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FirebaseService } from 'src/app/firebase.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private auth: FirebaseService, private firestore: AngularFirestore, private afAuth: AngularFireAuth ) { 
  }
 Vartotojas : any[] = [];
  ngOnInit(): void {
  }


  pridetiVartotoja(){
    this.auth.emailSignup("Raide@raide.lt","Auksine");
  }

  login(){
    this.auth.login('mauglis@mauglis.lt','mauglis');
  }

popup = false;
}

