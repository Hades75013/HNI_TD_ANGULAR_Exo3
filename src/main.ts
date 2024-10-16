import {bootstrapApplication} from '@angular/platform-browser';
import {provideRouter, withComponentInputBinding} from '@angular/router';
import {AppComponent} from './app/app.component';
import {provideHttpClient,withFetch} from '@angular/common/http';
import {routes} from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(withFetch()),
  ],
}).catch(err => console.error(err));
