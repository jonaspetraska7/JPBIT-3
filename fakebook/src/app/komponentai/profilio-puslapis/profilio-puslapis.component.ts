import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Scroll } from '@angular/router';


@Component({
  selector: 'app-profilio-puslapis',
  templateUrl: './profilio-puslapis.component.html',
  styleUrls: ['./profilio-puslapis.component.css']
})
export class ProfilioPuslapisComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    window.setTimeout( () => {
      console.log('užkrovė');
      window.scroll(0, 400);
      
    }, 3000);
    
  }
  pajudam(){
    window.scrollTo(0, 400);
  }

}
