package org.acme.dateReservation;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;

@ApplicationScoped
public class ReservationService {
    @Inject
    private ReservationRepository reservationRepository;

    public List<Reservation> findAll() {
        return reservationRepository.listAll();
    }

    @Transactional
    public void addReservation(Reservation reservation){
        reservationRepository.persist(reservation);
    }

    @Transactional
    public void deleteReservation(Long id){
        reservationRepository.deleteById(id);
    }

    @Transactional
    public void updateReservation(Long id, String dateOfVisit) {
        Reservation reservation = reservationRepository.findById(id);
        reservation.setDateOfVisit((dateOfVisit));
        reservationRepository.persist(reservation);
    }

}
