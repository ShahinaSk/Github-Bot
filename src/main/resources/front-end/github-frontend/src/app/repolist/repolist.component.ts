import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-repolist',
  templateUrl: './repolist.component.html',
  styleUrls: ['./repolist.component.css']
})
export class RepolistComponent implements OnInit {

  newJsonObject=[];
  constructor(private githubService:GithubService,private activateRoute:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.viewWishlist();
  }

  viewWishlist(){  
    return  this.githubService.viewWishlist().subscribe((data:any) => {
     console.log(data);
     var jsonObject = JSON.parse(JSON.stringify(data));
     for (var iterator in jsonObject)
     {
        var name=jsonObject[iterator].name;
        var description=jsonObject[iterator].description;
  
        var myJson={name,description};
         this.newJsonObject.push(myJson);
        console.log(myJson.name+"\t"+myJson.description);
   
     }
   
   })
  }

  deleteFromWishlist(name:string){
    this.router.navigateByUrl("/delete/"+name);
    console.log("This Works");
   
   }
 
   updateRepoDescription(name:string){
    this.router.navigateByUrl("/update/"+name);
    console.log("This Works");   
   }
}
