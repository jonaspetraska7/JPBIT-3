import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private messageSource = new Subject();
  currentMessage$ = this.messageSource.asObservable();
  testMessage: any[] = [];

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private firestore: AngularFirestore) { this.currentMessage$ = this.firestore.collection('L6rFagGHczb57y2qxrMlgpV3pFA3').doc('feedas').valueChanges();
    console.log(this.currentMessage$);
  }


login(email: string, password: string){
  this.afAuth.signInWithEmailAndPassword(email, password)
  .then(value => {
    console.log('Nice, it worked!');
    this.router.navigateByUrl('');
  })
  .catch(err => {
    console.log("Something went wrong: ", err.message);
  })
}


//draugu sarasa *Gavimas*


//feedas *Gavimas*


//zinutes-ivedimas *Siuntimas*


//profilis *Gavimas*


//login *Auth Modulis*


//register *Auth Modulis*


//register *Siuntimas user info i DB* (Jei spesim)





}
