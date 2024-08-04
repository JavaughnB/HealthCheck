import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-health-check',
  templateUrl: './health-check.component.html',
  styleUrls: ['./health-check.component.scss']
})
export class HealthCheckComponent implements OnInit {
  result? : Result
  url : string = environment.baseUrl + '/api/health'

  constructor(private http: HttpClient){
  }
  ngOnInit(){
    this.http.get(this.url).subscribe({
      next: res => {this.result = res as Result},
      error: err => console.error(err)
    })
  }
}
interface Result{
   checks: Check[];
   totalSuccess: string;
   totalResponseTime: number;
}
interface Check {
  name: string;
  responseTime: number;
  status: string;
  description: string;
}
