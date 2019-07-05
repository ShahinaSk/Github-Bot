import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  repoName;
  constructor(private githubService:GithubService,private activateRoute:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.deleteFromWishlist();
  }

  

    deleteFromWishlist()
    {
      const name= this.activateRoute.snapshot.paramMap.get('name');
      this.repoName=name;
      console.log(name);
      this.githubService.deleteFromWishlist(name).subscribe((data:any) => {
        console.log(data);
      })

    }

}
