import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Country, countryList } from '../Models/country-list';
import { Weather } from '../weather.model';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-onther-way',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet],
  templateUrl: './onther-way.component.html',
  styleUrl: './onther-way.component.css'
})
export class OntherWayComponent {

  countries: Country[] = countryList;
  selectedCountry: Country | null = null;
  selectedCity: string | null = null;
  weatherData:Weather|undefined=undefined;
  cities:string='';
  errorMsg:string='';
  isLoading:boolean=false;
  hasWeatherData:boolean=false;
  constructor(private _weatherService:WeatherService,private _router:Router){}

  /**
   * 
   * @param country 
   */
  selectCountry(country: Country): void {
    this.selectedCountry = country;
    this.selectedCity = null; // Clear selected city when changing country
    this.weatherData = undefined; // Clear weather data when changing country
  }

   // Fetch weather when a city is clicked
   selectCity(city: string): void {
    this.selectedCity = city;
    this.fetchWeather(city);
  }

   // Fetch weather data for the selected city
  fetchWeather(city: string): void {
    this.isLoading = true;
    this.errorMsg = '';
    
    this._weatherService.getWeather2(city).subscribe({
      next: (data) => {
        this.weatherData = data;
        this.isLoading = false;
      }, error: 
      (error) => {
        this.errorMsg = 'Failed to fetch weather data.';
        this.isLoading = false;
      }
    }
    );
  }
}
