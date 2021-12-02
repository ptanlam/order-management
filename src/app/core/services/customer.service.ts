import { Injectable } from '@angular/core';
import { Customer } from '../../models/customer';
import { name, address, phone } from 'faker';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CustomerService {
  private _customerList: Customer[];

  constructor() {
    this._customerList = [...new Array(15)].map((_, i) => ({
      id: i,
      firstName: name.firstName(),
      lastName: name.lastName(),
      address: `${address.country()}, ${address.cityName()}`,
      phoneNumber: phone.phoneNumber(),
    }));
  }

  getAll() {
    return of(this._customerList);
  }

  add() {
    this._customerList.push({
      id: this._customerList.length,
      firstName: name.firstName(),
      lastName: name.lastName(),
      address: `${address.country()}, ${address.cityName()}`,
      phoneNumber: phone.phoneNumber(),
    });
  }

  remove(id: number) {
    this._customerList = this._customerList.filter((c) => c.id !== id);
  }
}
