import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router) { }


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
