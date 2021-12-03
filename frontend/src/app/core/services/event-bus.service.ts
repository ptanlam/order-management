import { Injectable } from '@angular/core';
import { filter, map, Subject } from 'rxjs';
import { ApplicationEventType } from '../../enums/shared';
import { ApplicationEvent } from '../../models/shared';

@Injectable({ providedIn: 'root' })
export class EventBusService {
  private _subject = new Subject<ApplicationEvent>();

  constructor() {}

  on(eventType: ApplicationEventType, callback: any) {
    return this._subject
      .pipe(
        filter((e: ApplicationEvent) => e.type === eventType),
        map((e: ApplicationEvent) => e.value)
      )
      .subscribe(callback);
  }

  emit(event: ApplicationEvent) {
    this._subject.next(event);
  }
}
