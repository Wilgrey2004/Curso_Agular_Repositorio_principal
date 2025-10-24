import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
bootstrapApplication(App, {
  ...appConfig,
  providers: [
    provideHttpClient(),
    provideRouter(routes), // 👈 Esto habilita ActivatedRoute, RouterLink, RouterOutlet, etc.
  ],
}).catch((err) => console.error(err));
