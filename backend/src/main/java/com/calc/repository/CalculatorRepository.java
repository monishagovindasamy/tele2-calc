package com.calc.repository;

import com.calc.entity.CalculatorEntity;
import com.calc.model.Operation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CalculatorRepository extends JpaRepository<CalculatorEntity, Long> {

    Optional<CalculatorEntity> findByInput1AndInput2AndOperation(Double input1, Double input2, Operation operation);

}
