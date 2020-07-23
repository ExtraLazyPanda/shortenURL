import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {}

  public getDataFromJson() {
    return this.http.get('../../assets/people.json')
      .pipe(
        map(res => {
          return res;
        }));
  }

  public getDataFromApi() {
    return this.http.get('http://localhost:3000/data')
      .pipe(
        map(res => {
          return res;
        }));
  }
}
