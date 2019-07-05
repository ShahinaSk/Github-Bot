import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  newJsonObject=[];

  constructor(private githubService:GithubService,private router:Router) { }

  ngOnInit() {
    this.getAllRepos();
  }

  getAllRepos()
  {
  this.githubService.getRepos().subscribe((data:any) => {
  
     var jsonObject = JSON.parse(JSON.stringify(data));
    for (var iterator in jsonObject)
    {
       var name=jsonObject[iterator].name;
       var description=jsonObject[iterator].description;
       var language=jsonObject[iterator].language;
       var myJson={name,description,language};
        this.newJsonObject.push(myJson);
       console.log(myJson.name+"\t"+myJson.description+"\t"+myJson.language);
  
    }
  
  })
  }
  addToWishList(name:string,description:string){
   this.router.navigateByUrl("/save/"+name+"/"+description);
   console.log("This Works");
  
  }
  

  }