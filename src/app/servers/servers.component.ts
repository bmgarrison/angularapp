import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created";
  serverName = 'TestServer';
  serverCreated = false;
  serverList = ["Server1", "Server2"];
  serverIndex = null;
  


  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.serverList.push(this.serverName);
    this.serverCreationStatus = "Server was created! Name is " + this.serverName;
  }

  onRemoveServer(){
    this.serverIndex = this.serverList.indexOf(this.serverName);
    console.log(this.serverIndex);
    if(this.serverIndex > 0){
      this.serverList.splice(this.serverIndex);
      this.serverCreationStatus = "Server "+this.serverName+ " was removed"
      return;
    }
    this.serverCreationStatus = "Server "+this.serverName+ " does not exist";
  }

  // showConfig() {
  //   // this.configSerice.getConfig()
  //   //   .subscribe((data: Config) => this.config = {
  //   //       heroesUrl: data['heroesUrl'],
  //   //       textfile:  data['textfile']
  //   //   });
  //     //return "this is the config"
  // }

}
