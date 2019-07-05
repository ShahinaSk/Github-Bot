import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

   repoName;
  constructor(private githubService:GithubService,private activateRoute:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.saveToWishlist();
  }

  saveToWishlist(){
    const name= this.activateRoute.snapshot.paramMap.get('name');
    this.repoName=name;
    const description= this.activateRoute.snapshot.paramMap.get('description');
    this.githubService.saveToWishlist(name,description).subscribe((data:any) => {
      console.log(data);
    })
  }
}
