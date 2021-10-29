import { Component, OnInit } from '@angular/core';
import { InteraktyvumasService } from 'src/app/interaktyvumas.service';
import { FirebaseService } from 'src/app/firebase.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { query, orderBy, limit } from "firebase/firestore"; 

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

    let current_date=new Date();


    let irasiukas = {
      createdAt: current_date,
      content: val.target.value,
      userId: 'testUser'
    }
    this.firestore.collection('Irasai').add(irasiukas);
    this.getPosts();
  }


  
  atsakymas: any;
  getPosts(){
   
    // const q = query(this.firestore.collection('Irasai').ref, orderBy("createdAt"), limit(3));
    this.firestore.collection('Irasai', ref=> ref.orderBy('createdAt', 'desc')).valueChanges().subscribe( (x) =>
    {
      console.log(x)
    });
    // this.firestore.collection('Irasai').valueChanges().subscribe( (x) => {
      
    //   this.atsakymas = x
    //   let rikiavimas1 = this.atsakymas
    // });
  }

  ngOnInit(): void {
  }

  



}
