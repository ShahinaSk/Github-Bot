package com.stackroute.githubbot.controller;

import com.stackroute.githubbot.domain.Repository;
import com.stackroute.githubbot.exceptions.RepositoryAlreadyExistsException;
import com.stackroute.githubbot.exceptions.RepositoryNotFoundException;
import com.stackroute.githubbot.service.RepoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/v1")
public class RepoController {

    private RepoService repoService;

    @Autowired
    public RepoController(RepoService repoService) {
        this.repoService = repoService;
    }

    @PostMapping("repository/{name}/{description}")
    public ResponseEntity<?> saveRepositoryToWishlist(@PathVariable String name,@PathVariable String description)
    {

        Repository repository=new Repository();
        repository.setName(name);
        repository.setDescription(description);
        ResponseEntity responseEntity;
        Repository savedRepository=null;
        try {
            savedRepository = repoService.saveRepository(repository);
            responseEntity = new ResponseEntity<Repository>(savedRepository, HttpStatus.CREATED);
        }
        catch(RepositoryAlreadyExistsException re)
        {
            responseEntity=new ResponseEntity<String>(re.getMessage(), HttpStatus.CONFLICT);
        }
        return responseEntity;

    }
    @GetMapping("repositories")
    public ResponseEntity<?> getAllRepositoriesFromWishlist()
    {
        return new ResponseEntity<List>(repoService.getAllRepositories(), HttpStatus.OK);

    }

    @PutMapping("repository/{name}/{description}")
    public ResponseEntity<?> getRepositoryAfterUpdatingDescription(@PathVariable String name, @PathVariable  String description)
    {

        ResponseEntity responseEntity;
        try {
            responseEntity = new ResponseEntity<Repository>(repoService.updateRepositoryDescription(name, description), HttpStatus.OK);
        }
        catch(RepositoryNotFoundException repositoryNotFoundException){
            responseEntity = new ResponseEntity<String>(repositoryNotFoundException.getMessage(),HttpStatus.NOT_FOUND);
        }
        return responseEntity;

    }

    @DeleteMapping("repository/{name}")
    public ResponseEntity<?> getRepositoryAfterDeleting(@PathVariable String name)
    {

        ResponseEntity responseEntity;
        responseEntity=new ResponseEntity<Repository>(repoService.deleteRepository(name), HttpStatus.OK);
        return responseEntity;

    }

}
