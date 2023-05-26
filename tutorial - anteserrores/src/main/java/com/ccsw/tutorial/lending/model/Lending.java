package com.ccsw.tutorial.lending.model;

import java.util.Date;

import com.ccsw.tutorial.client.model.Client;
import com.ccsw.tutorial.game.model.Game;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "Lending")
public class Lending {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "game_id", nullable = false)
    private Game game;

    @ManyToOne
    @JoinColumn(name = "client_id", nullable = false)
    private Client client;

    @Column(name = "start_lending_date", nullable = false)
    private Date startLendingDate;

    @Column(name = "finish_lending_date", nullable = false)
    private Date finishLendingDate;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Game getGame() {
        return game;
    }

    public void setGame(Game game) {
        this.game = game;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }

    public Date getStartLendingDate() {
        return startLendingDate;
    }

    public void setStartLendingDate(Date startLendingDate) {
        this.startLendingDate = startLendingDate;

    }

    public Date getFinishLendingDate() {
        return finishLendingDate;
    }

    public void setFinishLendingDate(Date finishLendingDate) {
        this.finishLendingDate = finishLendingDate;

    }

}
