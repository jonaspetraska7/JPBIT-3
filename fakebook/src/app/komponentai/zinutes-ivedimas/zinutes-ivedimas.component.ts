import { Component, OnInit } from '@angular/core';
import { InteraktyvumasService } from 'src/app/interaktyvumas.service';
import { FirebaseService } from 'src/app/firebase.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-zinutes-ivedimas',
  templateUrl: './zinutes-ivedimas.component.html',
  styleUrls: ['./zinutes-ivedimas.component.css']
})
export class ZinutesIvedimasComponent implements OnInit {

  constructor(
    private _interaktyvumasService: InteraktyvumasService,
    private firestore: AngularFirestore) { }

  getVal(val: any)
  {
    console.log(val.target.value);
    
    this._interaktyvumasService.sendMessage(val.target.value);
  }

  addPost(val: any){
    let irasiukas = {
      turinys: val
    }
    this.firestore.collection('Irasai').add(irasiukas);
  }

  ngOnInit(): void {
  }

  



}
