package com.example.demo.activeMQ;

import com.example.demo.pes.PesController;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.annotation.JmsListener;

import javax.jms.*;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class messageConsumer{
    Logger LOGGER = LogManager.getLogger(PesController.class);

    @JmsListener(destination = "psarnaAlbus")
    public void messageListener(SystemMessage systemMessage){
        LOGGER.info("Message recieved. {}", systemMessage);
    }
}
