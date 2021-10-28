import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-draugu-sarasas',
  templateUrl: './draugu-sarasas.component.html',
  styleUrls: ['./draugu-sarasas.component.css']
})
export class DrauguSarasasComponent implements OnInit {
searchText = "";
Vartotojas : any [] = [];



  constructor( private firestore: AngularFirestore ) {
    this.firestore.collection('Vartotojas').valueChanges().subscribe((x : any) => this.Vartotojas = x);
    console.log('veikia')
   }
  
  ngOnInit(): void {
  }
  

}
