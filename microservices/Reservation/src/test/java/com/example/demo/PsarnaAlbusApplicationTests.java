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

@WebMvcTest(PesController.class)
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
}
