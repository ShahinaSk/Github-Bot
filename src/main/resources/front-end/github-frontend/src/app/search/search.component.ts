import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

 
  constructor(private githubService:GithubService,private activateRoute:ActivatedRoute,private router:Router) { }
  users=[];
  ngOnInit() {
    this.getAllUsersByName()

  
  }
  getAllUsersByName(){
  const search = this.activateRoute.snapshot.paramMap.get('userName');
  this.githubService.getAllUsersByName(search).subscribe((data:any) => {
    data=data.items;
    this.users = data;
    console.log(data);
  })
}

sendData(){

  this.router.navigateByUrl("/repos");
  console.log("This Works");
}


  }
 
  



