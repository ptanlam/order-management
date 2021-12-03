import { Component, Input, OnInit } from '@angular/core';
import { Order } from '../../models';

@Component({
  selector: 'fm-order-grid',
  templateUrl: './order-grid.component.html',
  styleUrls: ['./order-grid.component.css'],
})
export class OrderGridComponent implements OnInit {
  @Input() orderList!: Order[] | null;

  constructor() {}

  ngOnInit(): void {}
}
