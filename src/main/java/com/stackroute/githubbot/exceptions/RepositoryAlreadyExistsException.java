package com.stackroute.githubbot.exceptions;

public class RepositoryAlreadyExistsException extends Exception{

    private String message;

    public RepositoryAlreadyExistsException()
    {

    }
    public RepositoryAlreadyExistsException(String message)
    {
        super(message);
        this.message=message;
    }
}
