import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Order } from '../../models';

@Injectable({ providedIn: 'root' })
export class OrderService {
  private readonly _serviceUrl = `${environment.serviceUrl}/orders`;

  constructor(private readonly _httpClient: HttpClient) {}

  getAll() {
    return this._httpClient.get<Order[]>(this._serviceUrl);
  }

  add(dto: Omit<Order, 'id'>) {
    return this._httpClient.post<Order>(this._serviceUrl, { ...dto });
  }

  remove(id: number) {
    return this._httpClient.delete(`${this._serviceUrl}/${id}`);
  }
}
