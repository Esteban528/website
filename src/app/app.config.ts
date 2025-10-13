import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideMarkdown } from 'ngx-markdown';
import { provideTranslateService } from "@ngx-translate/core";
import { provideTranslateHttpLoader } from "@ngx-translate/http-loader";

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
  provideRouter(routes, withComponentInputBinding()), provideHttpClient()
    , provideMarkdown(),
  provideTranslateService({
    loader: provideTranslateHttpLoader({
      prefix: '/translation/',
      suffix: '.json'
    }),
    fallbackLang: 'en',
    lang: 'en'
  })
  ]
};
