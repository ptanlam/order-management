import { Component, Input, OnInit } from '@angular/core';
import { Order } from '../../models';

@Component({
  selector: 'fm-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.css'],
})
export class OrderCardComponent implements OnInit {
  @Input() order!: Order;

  constructor() {}

  ngOnInit(): void {}
}
