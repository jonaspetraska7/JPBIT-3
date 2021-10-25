import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-story-meniu',
  templateUrl: './story-meniu.component.html',
  styleUrls: ['./story-meniu.component.css']
})
export class StoryMeniuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa-chevron-left"></i>', '<i class="fa-chevron-right></i>"'],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 4
      },
      700: {
        items: 5
      },
      940: {
        items: 5
      }
    },
    nav: true
  }

}
