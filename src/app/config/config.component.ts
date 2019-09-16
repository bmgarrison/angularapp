import { Component } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { ConfigService } from './config.service'
import { Config } from 'protractor';





@Component({ 
    selector: 'app-config',
    templateUrl: './config.component.html'})
export class ConfigComponent {
    constructor( public configSerice: ConfigService ){
       
    }

    config: Config;

    showConfig() {
        this.configSerice.getConfig()
          .subscribe((data: Config) => this.config = {
              heroesUrl: data['heroesUrl'],
              textfile:  data['textfile']
          });
          return "working"
      }
}
