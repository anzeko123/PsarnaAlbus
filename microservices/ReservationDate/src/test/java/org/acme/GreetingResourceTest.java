package org.acme;

import io.quarkus.test.common.http.TestHTTPEndpoint;
import io.quarkus.test.common.http.TestHTTPResource;
import io.quarkus.test.junit.QuarkusTest;
import io.restassured.http.ContentType;
import org.acme.dateReservation.Reservation;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.hamcrest.CoreMatchers.hasItems;

import java.io.IOException;
import java.net.URL;

import static io.restassured.RestAssured.given;
import static org.hamcrest.CoreMatchers.is;

@QuarkusTest
public class GreetingResourceTest {

    @TestHTTPEndpoint(GreetingResource.class)
    @TestHTTPResource
    URL url;
    @Test
    public void test() throws IOException {
        given()
                .when().get("/reservationDate/all")
                .then()
                .statusCode(200);
    }

    //@Test
    //public void testPost() throws IOException {
/*
        given().contentType(ContentType.JSON)
                .when().post("/reservationDate/add")
                .then().statusCode(200)
                .body("id", hasItems(2))
                .body("dateOfVisit", hasItems("03.05.2023"))
                .body("nameOfVisitors", hasItems("Janez"))
                .body("reservarId", hasItems("0"))
                .body("userId", hasItems());
*/
    //}
                //.body(is("hello"));
/*
        given()
          .when().get("/reservationDate/all")
          .then()
             .statusCode(200)
             .body(is("[\n" +
                     "    {\n" +
                     "        \"dateOfVisit\": \"03.05.2023\",\n" +
                     "        \"id\": 2,\n" +
                     "        \"nameOfVisitor\": \"Janez\",\n" +
                     "        \"reserverId\": 0,\n" +
                     "        \"userId\": \"\"\n" +
                     "    },\n" +
                     "    {\n" +
                     "        \"dateOfVisit\": \"05.05.2023\",\n" +
                     "        \"id\": 9,\n" +
                     "        \"nameOfVisitor\": \"Anamarija\",\n" +
                     "        \"reserverId\": 0,\n" +
                     "        \"userId\": \"\"\n" +
                     "    }\n" +
                     "]"));

*/

}
