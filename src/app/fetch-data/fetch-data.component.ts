import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  styleUrls: ['./fetch-data.component.scss']
})
export class FetchDataComponent implements OnInit {
  public forecasts?: WeatherForecast[];
  url : string = environment.baseUrl + '/api/WeatherForecast'

  constructor(private http: HttpClient) {
  http.get(this.url).subscribe({
    next: res =>{ this.forecasts = res as WeatherForecast[];},
    error: err => console.error(err)
  })
  }
  ngOnInit(): void {
  }
}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}