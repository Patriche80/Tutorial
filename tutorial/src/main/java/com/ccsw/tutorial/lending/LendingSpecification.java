package com.ccsw.tutorial.lending;

import org.springframework.data.jpa.domain.Specification;

import com.ccsw.tutorial.common.criteria.SearchCriteria;
import com.ccsw.tutorial.lending.model.Lending;

import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Path;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;

public class LendingSpecification implements Specification<Lending> {

    private static final long serialVersionUID = 1L;

    private final SearchCriteria criteria;

    public LendingSpecification(SearchCriteria criteria) {

        this.criteria = criteria;
    }

    @Override
    public Predicate toPredicate(Root<Lending> root, CriteriaQuery<?> query, CriteriaBuilder builder) {
        if (criteria.getOperation().equalsIgnoreCase(":") && criteria.getValue() != null) {
            Path<String> path = getPath(root);
            if (path.getJavaType() == String.class) {
                return builder.like(path, "%" + criteria.getValue() + "%");
            } else {
                return builder.equal(path, criteria.getValue());
            }

        }

        if (criteria.getOperation().equalsIgnoreCase(">") && criteria.getValue() != null) {
            Path<String> path = getPath(root);

            return builder.greaterThan(path, criteria.getValue() + "");
        }

        if (criteria.getOperation().equalsIgnoreCase("<") && criteria.getValue() != null) {
            Path<String> path = getPath(root);
            return builder.lessThan(path, criteria.getValue() + "");
        }

        if (criteria.getOperation().equalsIgnoreCase(">=") && criteria.getValue() != null) {
            Path<String> path = getPath(root);
            return builder.greaterThanOrEqualTo(path, criteria.getValue() + "");
        }

        if (criteria.getOperation().equalsIgnoreCase("<=") && criteria.getValue() != null) {
            Path<String> path = getPath(root);
            return builder.lessThanOrEqualTo(path, criteria.getValue() + "");
        }

        if (criteria.getOperation().equalsIgnoreCase("between") && criteria.getValue() != null) {
            Path<String> path = getPath(root);
            return builder.between(path, ((String[]) criteria.getValue())[0], ((String[]) criteria.getValue())[1]);

        }

        return null;
    }

    private Path<String> getPath(Root<Lending> root) {
        String key = criteria.getKey();
        String[] split = key.split("[.]", 0);

        Path<String> expression = root.get(split[0]);
        for (int i = 1; i < split.length; i++) {
            expression = expression.get(split[i]);
        }

        return expression;
    }

}
