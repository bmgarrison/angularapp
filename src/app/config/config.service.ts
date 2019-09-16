import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';



@Injectable()
export class ConfigService {
  configUrl = 'assets/config.json';
  constructor(private http: HttpClient) { }

  getConfig() {
    return this.http.get(this.configUrl);
  }
}
