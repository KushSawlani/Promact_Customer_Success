package com.example.promact_customer_success.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "application_user")
public class ApplicationUser {
   
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "email")
    private String email;

    @Column(name = "role")
    private String role;

    public ApplicationUser(String email, String role) {
        this.email = email;
        this.role = role;
    }

    public ApplicationUser() {

    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}
    