import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {PreloadAllModules, RouterModule, withPreloading} from '@angular/router';
import {routes} from "./app.routes";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {provideHttpClient} from "@angular/common/http";
import {AppComponent} from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    NgOptimizedImage,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {
}
