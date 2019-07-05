package com.stackroute.githubbot.repository;

import com.stackroute.githubbot.domain.Repository;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RepoRepository extends MongoRepository<Repository,String> {
}
