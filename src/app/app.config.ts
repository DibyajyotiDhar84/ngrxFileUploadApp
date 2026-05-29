import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { uploadReducer } from './File-State/file-reducer';
import { provideEffects } from '@ngrx/effects';
import { uploadEffect } from './File-State/file-effect';

export const appConfig: ApplicationConfig = {
  providers: [provideBrowserGlobalErrorListeners(), provideRouter(routes), 
   provideStore({ filestore: uploadReducer }),
   provideEffects([uploadEffect])
  ],
};
