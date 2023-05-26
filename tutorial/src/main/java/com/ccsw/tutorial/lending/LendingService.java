package com.ccsw.tutorial.lending;

import java.util.Date;
import java.util.List;

import org.springframework.data.domain.Page;

import com.ccsw.tutorial.lending.model.Lending;
import com.ccsw.tutorial.lending.model.LendingDto;
import com.ccsw.tutorial.lending.model.LendingSearchDto;

public interface LendingService {

    public Page<Lending> findPage(LendingSearchDto dto, Long gameId, Long clientId, Date date);

    public List<Lending> findAll();

    public Lending get(Long id);

    void save(LendingDto dto) throws Exception;

    void delete(Long id) throws Exception;

}
