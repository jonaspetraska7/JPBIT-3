import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';



@Component({
  selector: 'app-profilio-puslapis',
  templateUrl: './profilio-puslapis.component.html',
  styleUrls: ['./profilio-puslapis.component.css']
})
export class ProfilioPuslapisComponent implements OnInit {


  constructor(private firestore :AngularFirestore) {this.firestore.collection('info').valueChanges().subscribe((x : any) => this.infoIsFirebase = x[0].apatine_info) }
  infoIsFirebase = ""

  ngOnInit(): void {
    window.setTimeout( () => {
      console.log('užkrovė');
      const element = document.querySelector('#scrollId');
      element?.scrollIntoView();
      
    }, 0);
    
  }
  

}
