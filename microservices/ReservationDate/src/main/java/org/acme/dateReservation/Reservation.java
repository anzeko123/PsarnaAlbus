package org.acme.dateReservation;
import javax.persistence.*;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;

@Entity
@Table(name="reservationDate")
public class Reservation extends PanacheEntityBase {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    public Long id;

    @Column(name="userId", nullable=true)
    public String userId;

    @Column(name="reserverId", nullable=true)
    public int reserverId;

    @Column(name="dateOfVisit", nullable=false)
    public String dateOfVisit;

    @Column(name="nameOfVisitor", nullable=false)
    public String nameOfVisitor;

    public Reservation() {
    }

    public Reservation(String userId, Integer reserverId, String dateOfVisit, String nameOfVisitor) {
        this.userId = userId;
        this.reserverId = reserverId;
        this.dateOfVisit = dateOfVisit;
        this.nameOfVisitor = nameOfVisitor;
    }

    public Long getId(){return id;}
    public void setId(Long id) {this.id = id;}

    public String getUserId(){return userId;}
    public void setUserId(String userId) {this.userId = userId;}

    public Integer getReserverId(){return reserverId;}
    public void setReserverId(Integer reserverId) {this.reserverId = reserverId;}

    public String getDateOfVisit(){return dateOfVisit;}
    public void setDateOfVisit(String dateOfVisit) {this.dateOfVisit = dateOfVisit;}

    public String getNameOfVisitor(){return nameOfVisitor;}
    public void setNameOfVisitor(String nameOfVisitor) {this.nameOfVisitor = nameOfVisitor;}
}
