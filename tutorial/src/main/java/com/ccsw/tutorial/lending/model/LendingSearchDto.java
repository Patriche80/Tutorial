package com.ccsw.tutorial.lending.model;

import java.util.Date;

import com.ccsw.tutorial.common.pagination.PageableRequest;

public class LendingSearchDto {

    private PageableRequest pageable;

    private Long gameId;

    private Long clientId;

    private Date date;

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public PageableRequest getPageable() {
        return pageable;
    }

    public void setPageable(PageableRequest pageable) {
        this.pageable = pageable;
    }

    public Long getGameId() {
        return gameId;
    }

    public void setIdGame(Long gameId) {
        this.gameId = gameId;
    }

    public Long getIdClient() {
        return clientId;
    }

    public void setClientId(Long clientId) {
        this.clientId = clientId;
    }

}
