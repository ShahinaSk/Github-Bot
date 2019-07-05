import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private githubService:GithubService,private activateRoute:ActivatedRoute,private router:Router) { }

  ngOnInit() {
   // this.updateRepoDescription();
  }

  updateRepoDescription(description){
    const name= this.activateRoute.snapshot.paramMap.get('name');
    this.githubService.updateRepoDescription(name,description).subscribe((data:any) => {
      console.log(data);
      this.router.navigateByUrl("/repos");
    })
  }
}
