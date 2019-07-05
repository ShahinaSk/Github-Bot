import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-repo-creator',
  templateUrl: './repo-creator.component.html',
  styleUrls: ['./repo-creator.component.css']
})
export class RepoCreatorComponent implements OnInit {

  constructor(private githubService: GithubService,private router: Router) { }

  ngOnInit() {
  
  }


  createRepo(repoName,description){
     this.githubService.createRepository(repoName,description).subscribe((data:any)=>{    
      this.router.navigateByUrl("/create");
    });
}
}
