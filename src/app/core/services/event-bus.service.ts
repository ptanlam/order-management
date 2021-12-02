import { Injectable } from '@angular/core';
import { Subject, filter, map } from 'rxjs';
import { ApplicationEventType } from '../../enums/shared';
import { ApplicationEvent } from '../../models/shared';

@Injectable({ providedIn: 'root' })
export class EventBusService {
  private _subject = new Subject<any>();

  constructor() {}

  on(event: ApplicationEventType, callback: () => void) {
    return this._subject
      .pipe(
        filter((e: ApplicationEvent) => e.type === event),
        map((e: ApplicationEvent) => e.value)
      )
      .subscribe(callback);
  }

  emit(event: ApplicationEvent) {
    this._subject.next(event);
  }
}
