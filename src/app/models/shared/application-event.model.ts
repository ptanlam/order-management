import { ApplicationEventType } from '../../enums/shared';

export class ApplicationEvent {
  constructor(public type: ApplicationEventType, public value?: any) {}
}
