import {NgModule} from '@angular/core';
import {SolarSystemComponent} from './solar-system.component';
import {CommonModule} from '@angular/common';
import {SunImagesComponent} from './components/sun-images/sun-images.component';
import {RouterModule} from '@angular/router';
import {MercuryImagesComponent} from './components/mercury-images/mercury-images.component';
import {VenusImagesComponent} from './components/venus-images/venus-images.component';
import {ListImagesComponent} from './components/list-images/list-images.component';
import {EarthImagesComponent} from './components/earth-images/earth-images.component';
import {JupiterImagesComponent} from './components/jupiter-images/jupiter-images.component';
import {MarsImagesComponent} from './components/mars-images/mars-images.component';
import {SaturnImagesComponent} from './components/saturn-images/saturn-images.component';
import {UranusImagesComponent} from './components/uranus-images/uranus-images.component';
import {NeptuneImagesComponent} from './components/neptune-images/neptune-images.component';

@NgModule({
    declarations: [SolarSystemComponent, SunImagesComponent, MercuryImagesComponent, VenusImagesComponent,
        ListImagesComponent, EarthImagesComponent, JupiterImagesComponent, MarsImagesComponent, SaturnImagesComponent, UranusImagesComponent,
        NeptuneImagesComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: '',
            component: SolarSystemComponent,
        }])
    ],
    exports: [
        SunImagesComponent
    ]
})
export class SolarSystemModule { }
