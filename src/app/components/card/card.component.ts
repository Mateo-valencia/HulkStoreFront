import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() reference: string;
  @Input() price: string;
  @Input() brand: string;
  @Input() category: number;

  constructor() { }

  ngOnInit(): void {
  }

}
