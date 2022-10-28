import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService,
    private router:Router,
    private route:ActivatedRoute,
    private authService:AuthService
    ) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload(){
    // this.router.navigate(['servers'],{relativeTo:this.route});
  }

  onEdit(){
    // this.router.navigate(['/servers',4,'edit'],{queryParams:{'allowEdit':1},fragment:'editing'});
  }
  onLogIn(){
    this.authService.logIn();
  }
  onLogOut(){
    this.authService.logOut();
  }
}
