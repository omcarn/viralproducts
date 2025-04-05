import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

  items : any = [];

  constructor() { 

    this.items = [
      { id: 1, title: 'TCL (40 inches) Full HD Smart Android LED TV 40L4B (Black)', link: 'https://amzn.to/4jdalVo' },
      { id: 2, title: 'TS-90X Zoom HD Astronomical Telescope with Tripod', link: 'https://amzn.to/42xjnH5' },
      { id: 3, title: 'Solimo Premium Faux Leather Bean Bag Combo with Footrest & Cushion, Filled with Beans 2XL', link: 'https://amzn.to/3XIBIOP' },
      { id: 4, title: '6 in 1 multifunctional weight training kit - Dumbbells, Kettlebells, Barbells & Push up brackets in 1', link: 'https://amzn.to/4iRiLC1' },
      { id: 5, title: 'Pull Up Bar For Home Doorway Pull Up Bars For Home Workout', link: 'https://amzn.to/3Ea5kOs' },
      { id: 6, title: 'Wildcraft 45 Ltrs Grey and Orange Rucksack', link: 'https://amzn.to/43MkNyN' },
    ]
  }
}
