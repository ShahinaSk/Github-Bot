package com.stackroute.githubbot.service;

import com.stackroute.githubbot.domain.Repository;
import com.stackroute.githubbot.exceptions.RepositoryAlreadyExistsException;
import com.stackroute.githubbot.exceptions.RepositoryNotFoundException;
import com.stackroute.githubbot.repository.RepoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RepoServiceImpl implements RepoService{

    RepoRepository repoRepository;

    Repository repository;

    @Autowired
    public RepoServiceImpl(RepoRepository repoRepository) {
        this.repoRepository = repoRepository;
    }


    @Override
    public Repository saveRepository(Repository repository)throws RepositoryAlreadyExistsException {



        if (repoRepository.existsById(repository.getName())) {
            throw new RepositoryAlreadyExistsException("Repository already exists");
        }
        Repository repository1=null;
        repository1=repoRepository.save(repository);
        return repository1;
    }

    @Override
    public List<Repository> getAllRepositories() {
        return repoRepository.findAll();
    }

    @Override
    public Repository updateRepositoryDescription(String name, String description) throws RepositoryNotFoundException {

        Optional optional=repoRepository.findById(name);

        if(optional.isPresent())
        {
            repository=repoRepository.findById(name).get();
            repository.setDescription(description);
            repoRepository.save(repository);
        }

        else
        {
            throw new RepositoryNotFoundException("Ooops!!! Repo is not there!!!");
        }

        return repository;

    }

    @Override
    public Repository deleteRepository(String name) {

        Repository repository1=null;
        Optional optional=repoRepository.findById(name);
        if(optional.isPresent())
        {
            repository1=repoRepository.findById(name).get();
            repoRepository.deleteById(name);
        }

        return repository;
    }

}
