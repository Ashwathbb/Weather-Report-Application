import { Component, OnInit } from '@angular/core';
import { Weather } from '../weather.model';
import { WeatherService } from '../weather.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import {  Country, countryList } from '../Models/country-list';
import { OntherWayComponent } from '../onther-way/onther-way.component';

@Component({
  selector: 'app-weather-display',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink,RouterOutlet,OntherWayComponent],
  templateUrl: './weather-display.component.html',
  styleUrl: './weather-display.component.css'
})
export class WeatherDisplayComponent {
  countryList: Country[] = countryList;
  selectedCountry: string = '';
  selectedCity: string = '';
  cities: string[] = [];
  weatherData: Weather | undefined = undefined; // Allow undefined
  errorMsg: string = '';
  isLoading: boolean = false;
  hasWeatherData: boolean = false; 

  constructor(private weatherService: WeatherService, private router:Router) {}

  onCountryChange() {
    const country = this.countryList.find(c => c.code === this.selectedCountry);
    this.cities = country ? country.cities : [];
    this.selectedCity = '';
  }

  searchWeather() {
    if (!this.selectedCity) {
      this.errorMsg = 'Please select a city.';
      return;
    }

    this.isLoading = true;
    this.errorMsg = '';

    this.weatherService.getWeather1(this.selectedCity, this.selectedCountry).subscribe(
      data => {
        this.weatherData = data;
        this.isLoading = false;
        this.hasWeatherData = true; // Weather data available
      },
      error => {
        this.errorMsg = 'Failed to retrieve weather data.';
        this.isLoading = false;
        this.hasWeatherData = false; // No weather data available
      }
    );
  }
  clear(): void {
    this.selectedCountry = '';
    this.selectedCity = '';
    this.weatherData = undefined; // Use undefined instead of null
    this.hasWeatherData = false; // Weather data is cleared
    this.errorMsg = '';
  }
  anotherWay(){
    this.router.navigate(['/checkotherway']);
  }
}
