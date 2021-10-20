import { ThisReceiver } from '@angular/compiler';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit, Input } from '@angular/core';
import { InteraktyvumasService } from 'src/app/interaktyvumas.service';

@Component({
  selector: 'app-feedas',
  templateUrl: './feedas.component.html',
  styleUrls: ['./feedas.component.css']
})
export class FeedasComponent implements OnInit {

  zinuteStr: string = "";
  count: number = 0;
  values: Array<any> = [];
  messages: Array<any> = [];
  
  constructor(private _interaktyvumasService: InteraktyvumasService) { }

  ngOnInit() {
    this._interaktyvumasService.feedoZinute$
    .subscribe(
      Message => {

      this.count ++; 
      this.messages.unshift(Message);
      this.values.push(this.count);
      

      console.log(this.values);
      console.log(this.messages);
      }
    )

  }
}
