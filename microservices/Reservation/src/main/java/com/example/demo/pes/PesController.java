package com.example.demo.pes;

import org.apache.logging.log4j.LogManager;
import org.slf4j.LoggerFactory;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path="reservation")
public class PesController {

    Logger LOGGER = LoggerFactory.getLogger(PesController.class);
    //private static final Logger LOGGER = LogManager.getLogger(PesController.class);
    private PesService pesService;
    @Autowired
    public PesController(PesService pesService) {
        this.pesService = pesService;
    }


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

    @PutMapping(path="/updateOwner")
    public String updateOwner(@RequestParam(name = "id") Long dogId, @RequestParam(name="ownerId") String ownerId){
        if(ownerId == ""){
            LOGGER.info("No user Id was present for reserving dog");
            return "No user Id was present for reserving dog";
        } else {
            pesService.updateOwner(dogId, ownerId);
            LOGGER.info("Dog Updated");
            return "updated";
        }
    }
}
