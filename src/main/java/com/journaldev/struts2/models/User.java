package com.journaldev.struts2.models;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User implements Serializable{
	private Long id;
	private String name;
    private String pwd;
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public Long getId() {
    	return id;
    }
    
    public void setId(long id) {
    	this.id = id;
    }
    
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPwd() {
		return pwd;
	}
	public void setPwd(String pwd) {
		this.pwd = pwd;
	}
    
}
