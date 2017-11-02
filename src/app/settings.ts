import { InjectionToken, ValueProvider } from '@angular/core';

export const BackendUri: InjectionToken<string> = new InjectionToken<string>('BackendUri');

export const BackendUriProvider: ValueProvider = {
  provide: BackendUri,
  useValue: 'http://192.168.99.100:8000'
};
