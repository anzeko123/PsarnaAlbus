package com.example.demo;

//import com.example.demo.pes.Pes;
//import com.example.demo.pes.PesController;
//import com.example.demo.pes.PesRepository;
//import com.example.demo.pes.PesService;
import org.hamcrest.Matchers;
import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpSession;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import com.jayway.jsonpath.JsonPath;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.concurrent.CompletableFuture;

import static net.bytebuddy.matcher.ElementMatchers.is;
import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.client.match.MockRestRequestMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

//@WebMvcTest(PesController.class)
@SpringBootTest
class PsarnaAlbusApplicationTests {
/*
	@Autowired
	private MockMvc mvc;

	@Autowired
	private PesRepository pesRepository;

	@MockBean
	private PesService pesService;

	@Autowired
	private PesController pesController;

	@Before
	public void setUp() {
		MockitoAnnotations.openMocks(this);
		this.mvc = MockMvcBuilders.standaloneSetup(pesController).build();
	}
*/
	@Test
	void contextLoads() throws Exception {
/*
		when(pesService.getPes()).thenReturn(List.of(new Pes("test", "1999-01-01", "test", "1234")));
		this.mvc.perform(MockMvcRequestBuilders.get("/reservation/all"))
				.andExpect(MockMvcResultMatchers.status().isOk())
				.andExpect(MockMvcResultMatchers.jsonPath("$.size()", Matchers.is(1)))
				.andExpect(MockMvcResultMatchers.jsonPath("$[0].dogName").value("test"));
*/
	}
/*
	@Test
	void createDog() throws Exception {
		this.mvc.perform(MockMvcRequestBuilders
						.post("/reservation/add")
						.contentType(MediaType.APPLICATION_JSON)
						.content("{\"id\": 20, \"dogName\":\"test\", \"dob\": \"test\", \"breed \": \"test\", \"reserverId\": \"1234\"}"))
				.andExpect(MockMvcResultMatchers.status().isCreated())
				.andExpect(MockMvcResultMatchers.header().string("Location", Matchers.containsString("saved")));

		verify(pesService).addNewPes(any(Pes.class));
	}
*/
		//RequestBuilder request = MockMvcRequestBuilders.get("/reservation/all");
		//MvcResult result = mvc.perform(request).andReturn();

		//mvc.perform(MockMvcRequestBuilders
		//		.get("/reservation/all")
		//		.contentType(MediaType.APPLICATION_JSON))
		//		.andExpect(status().isOk());


		//assertThat(this.restTemplate.getForObject("http://localhost:" + port + "/reservation/all",
		//String.class)).contains("Hello, World");

		//RequestBuilder request = MockMvcRequestBuilders.get("/reservation/all");
		//MvcResult result = mvc.perform(request).andReturn();
		//assertEquals("test", result);
		//final Long dogId = 2L;
		//Pes mockedDog = new Pes("Todi", "1999-01-15", "Labrador Retriever", "1234");
		//Mockito.doReturn(mockedDog).when(repository).findById(dogId); // note that this mock is not necessary, but it does make the test a unit test
        /*
        this.mvc.perform(get("/"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id", is(2)))
                .andExpect(jsonPath("$.dogName", is("Todi")))
                .andExpect(jsonPath("$.dob", is("1999-01-15")))
                .andExpect(jsonPath("$.breed", is("Labrador Retriever")))
                                .andExpect(jsonPath("$.reserverId", is("1234")));

                        verify(repository).findById(2L);
    }
    */
/*
        String expectedResponse = "{\"id\": 2, \"dogName\":\"Todi\", \"dob\": 1999-01-15, \"breed \": Labrador Retriever, \"reserverId\": 1234}";

		String responseString = mvc.perform(MockMvcRequestBuilders.post("/reservation/add"))
                .andExpect(status().isOk())
                .andReturn()
                .getResponse()
                .getContentAsString();

        assertEquals("saved", expectedResponse, responseString);
*/
		//Pes pes = new Pes("test", "test", "test", "1234");

}
