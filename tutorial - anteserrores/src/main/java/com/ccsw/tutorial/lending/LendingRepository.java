package com.ccsw.tutorial.lending;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.CrudRepository;

import com.ccsw.tutorial.lending.model.Lending;

public interface LendingRepository extends CrudRepository<Lending, Long>, JpaSpecificationExecutor<Lending> {

    @EntityGraph(attributePaths = { "client", "game" })
    Page<Lending> findAll(Pageable pageable);

    @EntityGraph(attributePaths = { "client", "game" })
    Page<Lending> findAll(Specification<Lending> spec, Pageable pageable);
}