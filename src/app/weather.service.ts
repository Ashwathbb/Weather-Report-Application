import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from './weather.model';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private _apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  private _apiKey: string = '22387d8dc3ba4b28b1536d6b2b80548f';

  constructor(private http: HttpClient) {}

  getWeather(lat: number, lon: number): Observable<Weather> {
    return this.http.get<Weather>(
      `${this._apiUrl}?lat=${lat}&lon=${lon}&appid=${environment.apiKey}`
    );
  }
  // Fetch weather data by city and country
  getWeather1(cityName: string, countryCode: string): Observable<Weather> {
    const url = `${this._apiUrl}?q=${cityName},${countryCode}&appid=${this._apiKey}&units=metric`;
    return this.http.get<Weather>(url);
  }
  getWeather2(cityName: string): Observable<Weather> {
    const url = `${this._apiUrl}?q=${cityName}&appid=${this._apiKey}&units=metric`;
    return this.http.get<Weather>(url);
  }
}
