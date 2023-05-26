package com.ccsw.tutorial.client;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.ccsw.tutorial.client.model.Client;
import com.ccsw.tutorial.client.model.ClientDto;

@ExtendWith(MockitoExtension.class)
public class ClientTest {

    @Mock
    private ClientRepository clientRepository;

    @InjectMocks
    private ClientServiceImpl clientService;

    // PRUEBA DE LISTADO

    @Test
    public void findAllShouldReturnAllClients() {

        List<Client> list = new ArrayList<>();
        list.add(mock(Client.class));

        when(clientRepository.findAll()).thenReturn(list);

        List<Client> clients = clientService.findAll();

        assertNotNull(clients);
        assertEquals(1, clients.size());
    }

    // PRUEBA DE CREACIÓN

    public static final String CLIENT_NAME = "CLIENT1";

    @Test
    public void saveNotExistsClientIdShouldInsert() {

        ClientDto clientDto = new ClientDto();
        clientDto.setName(CLIENT_NAME);

        ArgumentCaptor<Client> client = ArgumentCaptor.forClass(Client.class);

        try {
            clientService.save(null, clientDto);
        } catch (Exception e) {
            when(false);
        }

        verify(clientRepository).save(client.capture());

        assertEquals(CLIENT_NAME, client.getValue().getName());
    }

    public static final Long EXISTS_CLIENT_ID = 1L;

    // PRUEBA DE MODIFICACION

    @Test
    public void saveExistsClientIdShouldUpdate() {

        ClientDto clientDto = new ClientDto();
        clientDto.setName(CLIENT_NAME);

        Client client = mock(Client.class);
        when(clientRepository.findById(EXISTS_CLIENT_ID)).thenReturn(Optional.of(client));
        try {
            clientService.save(EXISTS_CLIENT_ID, clientDto);
        } catch (Exception e) {
            when(false);
        }

        verify(clientRepository).save(client);
    }

    // PRUEBA DE BORRADO

    @Test
    public void deleteExistsClientIdShouldDelete() throws Exception {

        Client client = mock(Client.class);
        when(clientRepository.findById(EXISTS_CLIENT_ID)).thenReturn(Optional.of(client));

        clientService.delete(EXISTS_CLIENT_ID);

        verify(clientRepository).deleteById(EXISTS_CLIENT_ID);
    }

}
