package org.acme.dateReservation;
import javax.enterprise.context.ApplicationScoped;
import io.quarkus.hibernate.orm.panache.PanacheRepository;

@ApplicationScoped
public class ReservationRepository implements PanacheRepository<Reservation>{
}