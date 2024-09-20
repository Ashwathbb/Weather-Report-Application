import { Routes } from '@angular/router';
import { OntherWayComponent } from './onther-way/onther-way.component';
import { WeatherDisplayComponent } from './weather-display/weather-display.component';

export const routes: Routes = [
    
     {
        path:'',
        component:WeatherDisplayComponent
     },
     { 
        path: 'checkotherway', 
        component: OntherWayComponent
     }
];

