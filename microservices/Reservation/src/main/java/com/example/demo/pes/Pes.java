package com.example.demo.pes;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;


@Entity
@Table(name="pes")
public class Pes {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="dogName", nullable = false)
    private String dogName;
    @Column(name="dob", nullable = false)
    private String dob;
    @Column(name="breed", nullable = false)
    private String breed;
    @Column(name="reserverId", nullable = true)
    private String reserverId;

    public Pes() {

    }

    public Pes(String dogName, String dob, String breed, String reserverId) {
        this.dogName = dogName;
        this.dob = dob;
        this.breed = breed;
        this.reserverId = reserverId;

    }

    public Long getId(){return id;}
    public void setId(Long id) {this.id = id;}

    public String getDogName(){return dogName;}
    public void setDogName(String dogName) {this.dogName = dogName;}

    public String getDob(){return dob;}
    public void setDob(String dob) {this.dob = dob;}

    public String getBreed(){return breed;}
    public void setBreed(String breed) {this.breed = breed;}

    public String getReserverId(){return reserverId;}
    public void setReserverId(String reserverId) {this.reserverId = reserverId;}

/*
    @Override
    public String toString() {
        return "{" +
                "name='" + dogName +
                "dob='" + dob +
                "breed=" + breed +
                "reserverId=" + reserverId +
                '}';
                */
}
