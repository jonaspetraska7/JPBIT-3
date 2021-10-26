import { Component, OnInit } from '@angular/core';



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
      const element = document.querySelector('#scrollId');
      element?.scrollIntoView();
      
    }, 0);
    
  }
  

}
