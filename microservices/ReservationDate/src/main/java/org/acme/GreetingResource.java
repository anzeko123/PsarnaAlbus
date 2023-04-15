package org.acme;

import org.acme.dateReservation.Reservation;
import org.acme.dateReservation.ReservationService;

import javax.inject.Inject;
import javax.json.JsonString;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import io.quarkus.logging.Log;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Path("/reservationDate")
public class GreetingResource {

    //private static final Logger LOG = Logger.getLogger(GreetingResource.class);
    //Logger LOGGER = LoggerFactory.getLogger(GreetingResource.class);
    @Inject
    ReservationService reservationService;


    @GET
    @Path("/all")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAll() {
        //LOGGER.info("All reservations listed");
        return Response.ok(reservationService.findAll()).build();
    }

    @POST
    @Path("/add")
    public String addNewReservation(Reservation reservation) {
        if(reservation.getDateOfVisit().isEmpty() || reservation.getNameOfVisitor().isEmpty()) {
            //LOGGER.info("Missing fields when applying for reservation");
            return "Please fill al fields";
        } else {
            reservationService.addReservation(reservation);
            //LOGGER.info("Reservation added with id: " + reservation.getId());
            return "You reserved your visit for: " + reservation.dateOfVisit;
        }
    }

    @DELETE
    @Path("/delete/{id}")
    public String deleteReservation(@PathParam("id") Long id) {
        if(id == null) {
            //LOGGER.info("Missing field during reservation deletion");
            return "there was an error deleting your reservation";
        } else {
            reservationService.deleteReservation(id);
            //LOGGER.info("Reservation deleted with id: " + id);
            return "reservation with id: " + id + " deleted";
        }
    }

    @PUT
    @Path("/update/{id}/{dateOfVisit}")
    public String updateReservation(@PathParam("id") Long id, @PathParam("dateOfVisit") String dateOfVisit) {
        if(id == null) {
            //LOGGER.info("Reservation feiled to update");
            return "there was an error updating your reservation";
        } else {
            reservationService.updateReservation(id, dateOfVisit);
            //LOGGER.info("Reservation updated with id:" + id);
            return "reservation with id: " + id + " updated to: " + dateOfVisit;
        }
    }

    //swagger at: http://localhost:8080/q/swagger-ui/
}