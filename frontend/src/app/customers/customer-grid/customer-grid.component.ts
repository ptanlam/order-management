import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Customer } from '../../models/customer';

@Component({
  selector: 'fm-customer-grid',
  templateUrl: './customer-grid.component.html',
  styleUrls: ['./customer-grid.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerGridComponent implements OnInit {
  @Input() customerList!: Customer[];
  @Output() add = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  addNew() {
    this.add.emit();
  }
}
