import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from 'src/app/firebase.service';

@Component({
  selector: 'app-feedas',
  templateUrl: './feedas.component.html',
  styleUrls: ['./feedas.component.css']
})
export class FeedasComponent implements OnInit {

  a: Array<any> = [
    {key:""},
    {value:""}
  ]
  messages: Array<any> = [];
  
 
  
  constructor(private _firebaseService: FirebaseService) { }

  ngOnInit() {
    this._firebaseService.currentMessage$
    .subscribe((Message: any ) => {
        console.log(Message);
        this.messages = Object.values(Message);

        console.log(this.messages);

        //console.log(Object.keys(object1));

      }
    )
  }
}
