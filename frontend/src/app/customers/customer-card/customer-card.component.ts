import { Component, Input } from '@angular/core';
import { EventBusService } from '../../core/services';
import { ApplicationEventType } from '../../enums/shared';
import { Customer } from '../../models/customer';
import { ApplicationEvent } from '../../models/shared';

@Component({
  selector: 'fm-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.css'],
})
export class CustomerCardComponent {
  @Input() customer!: Customer;

  constructor(private readonly _eventBus: EventBusService) {}

  remove(id: number) {
    this._eventBus.emit(
      new ApplicationEvent(ApplicationEventType.RemoveCustomer, id)
    );
  }
}
