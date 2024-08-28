import {NgModule} from '@angular/core';
import {SolarSystemComponent} from './solar-system.component';
import {CommonModule} from '@angular/common';
import {SunImagesComponent} from './components/sun-images/sun-images.component';
import {RouterModule} from '@angular/router';
import {MercuryImagesComponent} from './components/mercury-images/mercury-images.component';
import {VenusImagesComponent} from './components/venus-images/venus-images.component';
import {ListImagesComponent} from './components/list-images/list-images.component';

@NgModule({
  declarations: [SolarSystemComponent, SunImagesComponent, MercuryImagesComponent, VenusImagesComponent, ListImagesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: SolarSystemComponent,
    }])
  ],
})
export class SolarSystemModule { }
