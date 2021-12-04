import { Component, Input, OnInit } from '@angular/core';
import { EventBusService } from '../../core/services';
import { ApplicationEventType } from '../../enums/shared';
import { Order } from '../../models';
import { ApplicationEvent } from '../../models/shared';

@Component({
  selector: 'fm-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.css'],
})
export class OrderCardComponent implements OnInit {
  @Input() order!: Order;

  constructor(private readonly _eventBus: EventBusService) {}

  ngOnInit(): void {}

  onRemoveClick() {
    this._eventBus.emit(
      new ApplicationEvent(ApplicationEventType.RemoveOrder, this.order.id)
    );
  }
}
