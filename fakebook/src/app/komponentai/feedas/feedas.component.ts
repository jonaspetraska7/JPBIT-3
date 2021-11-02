import { Component, OnInit, Input } from '@angular/core';
import getVideoId from 'get-video-id';
import { FirebaseService } from 'src/app/firebase.service';

@Component({
  selector: 'app-feedas',
  templateUrl: './feedas.component.html',
  styleUrls: ['./feedas.component.css']
})
export class FeedasComponent implements OnInit {
  videoArray: Array<any> = [];
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
        this.messages = Message.map((item: { content: any; }) => item.content);
        console.log(this.messages);
        for (let i = 0; i < this.messages.length; i++ ){
          const {id} = getVideoId(this.messages[i]) 
          if (id == null){
            this.videoArray.push("");
          }
          else{
            this.videoArray.push(id);
          }
        }  
        console.log(this.videoArray)     
      }
    )
  }





 

}
