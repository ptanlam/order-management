import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../../models';

@Injectable({ providedIn: 'root' })
export class OrderService {
  private readonly _serviceUrl = 'https://localhost:5001/orders';

  constructor(private readonly _httpClient: HttpClient) {}

  getAll() {
    return this._httpClient.get<Order[]>(this._serviceUrl);
  }
}
