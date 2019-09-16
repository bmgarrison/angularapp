import { Component } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { Config } from 'protractor';
import { HttpClient, HttpResponse } from '@angular/common/http';


@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
serverId: number = 10;
serverStatus: string = 'offline';
config: Config;

constructor( public configSerice: ConfigService ) {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
}

getServerStatus(){
    return this.serverStatus;
}

getColor() {
   return this.serverStatus == 'online' ? 'green' : 'red';
}

}