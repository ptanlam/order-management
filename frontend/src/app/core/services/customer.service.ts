import { Injectable } from '@angular/core';
import { address, name, phone } from 'faker';
import { BehaviorSubject, of } from 'rxjs';
import { Customer } from '../../models/customer';

@Injectable({ providedIn: 'root' })
export class CustomerService {
  private _customerList: Customer[] = [...new Array(15)].map((_, i) => ({
    id: i,
    firstName: name.firstName(),
    lastName: name.lastName(),
    address: `${address.country()}, ${address.cityName()}`,
    phoneNumber: phone.phoneNumber(),
  }));

  private readonly _customerListSubject$ = new BehaviorSubject<Customer[]>(
    this._customerList
  );
  customerListChanged$ = this._customerListSubject$.asObservable();

  getAll() {
    return of([...this._customerList]);
  }

  add() {
    const newCustomerList = [
      ...this._customerList,
      {
        id: this._customerList.length,
        firstName: name.firstName(),
        lastName: name.lastName(),
        address: `${address.country()}, ${address.cityName()}`,
        phoneNumber: phone.phoneNumber(),
      },
    ];

    this._customerList = newCustomerList;
    return newCustomerList;
  }

  addOb() {
    this._customerList.push({
      id: this._customerList.length,
      firstName: name.firstName(),
      lastName: name.lastName(),
      address: `${address.country()}, ${address.cityName()}`,
      phoneNumber: phone.phoneNumber(),
    });
  }

  remove(id: number) {
    const newCustomerList = this._customerList.filter((c) => c.id !== id);
    this._customerList = newCustomerList;
    return newCustomerList;
  }
}
