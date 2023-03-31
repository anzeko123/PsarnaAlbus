package com.example.demo.pes;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ResponseBody;

import java.sql.SQLOutput;
import java.util.List;
import java.util.Optional;

@Service
public class PesService {

    Logger LOGGER = LoggerFactory.getLogger(PesController.class);
    private final PesRepository pesRepository;

    @Autowired
    public PesService(PesRepository pesRepository) {
        this.pesRepository = pesRepository;
    }



    public @ResponseBody List<Pes> getPes() {
        return pesRepository.findAll();
    }

    public void addNewPes(Pes pes) {
            pesRepository.save(pes);
            System.out.println(pes);
    }

    public void deletePes(Long id) {
        boolean exists = pesRepository.existsById(id);
        if(!exists) {
            LOGGER.info("Id for deletion is empty");
            throw new IllegalStateException("Pes z id-jem " + id + " ne obstaja");
        }
        pesRepository.deleteById(id);
    }

    public void updateOwner(Long id, String ownerId) {
        Pes pes = pesRepository.findById(id)
                .orElseThrow(() -> new IllegalStateException("Pes z id-jem " + id + " ne obstaja"));
        pes.setReserverId((ownerId));
        pesRepository.save(pes);
    }
}
