package com.stackroute.githubbot.service;

import com.stackroute.githubbot.domain.Repository;
import com.stackroute.githubbot.exceptions.RepositoryAlreadyExistsException;
import com.stackroute.githubbot.exceptions.RepositoryNotFoundException;

import java.util.List;

public interface RepoService {

    public Repository saveRepository(Repository repository) throws RepositoryAlreadyExistsException;

    public List<?> getAllRepositories();

    public Repository updateRepositoryDescription(String name,String description) throws RepositoryNotFoundException;

    public Repository deleteRepository(String name);


}
