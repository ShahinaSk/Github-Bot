import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  

  constructor(private router:Router,private githubService:GithubService) { }
  users:any=[];
  ngOnInit() {
   

  }
  sendData(value){

    this.router.navigateByUrl("/result/"+value);
    console.log("This Works");
  }

  createRepo(){
    this.router.navigateByUrl("/new");
    console.log("This Works");
  }

  viewWishlist(){
    this.router.navigateByUrl("/view");
    console.log("This Works");
  }

}
