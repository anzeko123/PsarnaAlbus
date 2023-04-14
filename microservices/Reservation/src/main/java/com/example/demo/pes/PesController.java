package com.example.demo.pes;

import com.example.demo.activeMQ.SystemMessage;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.log.LogMessage;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.HandlerExecutionChain;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
@RequestMapping(path="reservation")
public class PesController {

    Logger LOGGER = LogManager.getLogger(PesController.class);
    //private static final Logger LOGGER = (Logger) LogManager.getLogger(PesController.class);
    //private static final Logger LOGGER = LogManager.getLogger(PesController.class);
    private PesService pesService;
    @Autowired
    public PesController(PesService pesService) {
        this.pesService = pesService;
    }

    @Autowired
    private JmsTemplate jmsTemplate;

    @GetMapping(path="/all")
    public List<Pes> getStudents() {
        System.out.println("test");
        LOGGER.info("Got all dogs");
        return pesService.getPes();
    }

    @PostMapping(path="/add")
    public String registerNewStudent(@RequestBody Pes pes) {
        System.out.println(pes.getBreed());
        if(pes.getBreed() == "" || pes.getDob() == "" || pes.getDogName() == "" || pes.getReserverId() == "") {
            LOGGER.info("Empty fields from inserting dog");
            return "Please enter all fields";
        } else {
            LOGGER.info("Dog Saved");
            System.out.println("Polno");
            pesService.addNewPes(pes);
            return "saved";
        }

    }

    @DeleteMapping(path="/delete/{id}")
    public String deletePes(@PathVariable("id") Long id){
        if(id == null){
            LOGGER.info("Id for deletion is empty");
            return "Insered empty Id";
        } else {
            pesService.deletePes(id);
            LOGGER.info("Dog Deleted");
            return "deleted: " + id;
        }
    }

    public class Response {
        private String statusSuccess;
        private String statusFailed;

        public Response(){
        }
        public String getStatusSuccess(){return statusSuccess;}
        public void setStatusSuccess(String statusSuccess) {this.statusSuccess = statusSuccess;}
        public String getStatusFailed(){return statusFailed;}
        public void setStatusFailed(String statusFailed) {this.statusFailed = statusFailed;}

    }
    @PutMapping(path="/updateOwner")
    public Response updateOwner(@RequestParam(name = "id") Long dogId, @RequestParam(name="ownerId") String ownerId){
        Response response = new Response();

        if (ownerId == "") {
            LOGGER.info("No user Id was present for reserving dog");
            response.setStatusFailed("failed");
            return response;
        } else {
            pesService.updateOwner(dogId, ownerId);
            LOGGER.info("Dog Updated");
            response.setStatusSuccess("success");
            return response;
        }

    }
    @PutMapping(path="/updateOwnerTest", produces = "application/json")
    public ResponseEntity<String> activeMq(@RequestParam(name = "id") Long dogId, @RequestParam(name="ownerId") String ownerId, @RequestBody SystemMessage systemMessage) {

        try {
            jmsTemplate.convertAndSend("psarnaAlbus", systemMessage);
            return new ResponseEntity<>("Sent", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }




}
