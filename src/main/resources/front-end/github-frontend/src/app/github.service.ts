import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  url='https://api.github.com/user/repos?access_token='+'5333fee34d05211b5b2c9acb97ca81fa05bcbd18';  
  //url1='http://localhost:8080/api/v1/repository'           
  constructor(private http:HttpClient) { }
  httpOptions={
    headers:new HttpHeaders({
      'Content-type':'application/json'
    })
  }
  getAllUsersByName(username1:String){
    console.log(username1);
    return this.http.get('https://api.github.com/search/users?q='+username1,this.httpOptions);

   }
   getRepos(){
    return this.http.get('https://api.github.com/users/ShahinaSk/repos',this.httpOptions);
  }

   
createRepository(repoName,description){
  var data={"name":repoName,
            "description":description};
  var data1=JSON.stringify(data);
  return this.http.post(this.url,data1,this.httpOptions);
}

saveToWishlist(name1,description)
{
return this.http.post('http://localhost:8080/api/v1/repository/'+name1+'/'+description,this.httpOptions);
}
deleteFromWishlist(name)
{
  return this.http.delete('http://localhost:8080/api/v1/repository/'+name,this.httpOptions)
}

updateRepoDescription(name,description){
  return this.http.put('http://localhost:8080/api/v1/repository/'+name+"/"+description,this.httpOptions);

}
viewWishlist()
{
  return this.http.get('http://localhost:8080/api/v1/repositories',this.httpOptions);
}
}

