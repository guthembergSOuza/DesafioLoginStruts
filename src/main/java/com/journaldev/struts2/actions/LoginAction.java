package com.journaldev.struts2.actions;

import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.Namespaces;
import org.apache.struts2.convention.annotation.Result;

/**
 * Notice the @Action annotation where action and result pages are declared
 * Also notice that we don't need to implement Action interface or extend ActionSupport
 * class, only we need is an execute() method with same signature
 * @author pankaj
 *
 */
@Action(value = "login", results = {
		@Result(name = "SUCCESS", location = "/welcome.jsp"),
		@Result(name = "ERROR", location = "/error.jsp") })
@Namespace("/")
public class LoginAction {
	private String name;
	private String pwd;
	
	public String execute() throws Exception {
		if("pankaj".equals(this.getName()) && "admin".equals(this.getPwd()))
		return "SUCCESS";
		else return "ERROR";
	}
	
	
	public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    // Getter e Setter para 'pwd'
    public String getPwd() {
        return pwd;
    }

    public void setPwd(String pwd) {
        this.pwd = pwd;
    }
}
