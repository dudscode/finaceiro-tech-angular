import "zone.js";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppComponent } from "./app/app.component";
import { AppModule } from "./app/app.module";


const mount = () => {
  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
}

export { mount }
