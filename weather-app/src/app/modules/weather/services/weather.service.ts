import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'e48df9e4f5dc37765c7c61921d8f283c';

  constructor(private angular_http: HttpClient) {}

  getWeatherDatas(cityName: String): Observable<any>
  {
    return this.angular_http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&appid=${this.apiKey}`, {});
  }
}
