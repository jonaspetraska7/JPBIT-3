import { Component, OnInit } from '@angular/core';
import { InteraktyvumasService } from 'src/app/interaktyvumas.service';

@Component({
  selector: 'app-zinutes-ivedimas',
  templateUrl: './zinutes-ivedimas.component.html',
  styleUrls: ['./zinutes-ivedimas.component.css']
})
export class ZinutesIvedimasComponent implements OnInit {

  constructor(private _interaktyvumasService: InteraktyvumasService) { }

  getVal(val: any)
  {
    console.log(val.target.value);
    
    this._interaktyvumasService.sendMessage(val.target.value);
  }


  ngOnInit(): void {
  }

  



}
