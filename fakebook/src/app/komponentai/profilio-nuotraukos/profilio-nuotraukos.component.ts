import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-profilio-nuotraukos',
  templateUrl: './profilio-nuotraukos.component.html',
  styleUrls: ['./profilio-nuotraukos.component.css']
})
export class ProfilioNuotraukosComponent implements OnInit {
  atsakymas!: string;
  nuotrauku_sarasas : any[] = [];


  constructor( private firestore: AngularFirestore) {
    this.firestore.collection('Profilis').valueChanges().subscribe((x : any) => 
    this.atsakymas = x[0]
    
    );
    
   }
  
  ngOnInit(): void {
    window.setTimeout( () => {
      this.isrikiuoti();
      
    }, 1000);
  }
 
  isrikiuoti(){
    console.log(this.atsakymas);
    for (const [key, value] of Object.entries(this.atsakymas)) {
      console.log(key, value);
      this.nuotrauku_sarasas.push(value);
      console.log(this.nuotrauku_sarasas);
      
    }
      
    }
    
   
  
}
