// Import global stylesheet
import './styles/main.css';

//Need to change for derployment to { platformBrowser } from '@angular/platform-browser x'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
