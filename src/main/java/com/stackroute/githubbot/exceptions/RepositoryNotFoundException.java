package com.stackroute.githubbot.exceptions;

public class RepositoryNotFoundException extends Exception {


    private String message;

    public RepositoryNotFoundException()
    {

    }
    public RepositoryNotFoundException(String message)
    {
        super(message);
        this.message=message;
    }
}
