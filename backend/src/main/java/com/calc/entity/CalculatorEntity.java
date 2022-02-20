package com.calc.entity;

import com.calc.model.CalculatorModel;
import com.calc.model.Operation;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Getter
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder(toBuilder = true)
@Table(name = "calc")
public class CalculatorEntity {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id = -1L;

    @Column(name = "input1")
    private Double input1;

    @Column(name = "input2")
    private Double input2;

    @Column(name = "expression_result")
    private Double result;

    @Column(name = "operation")
    @Enumerated(EnumType.STRING)
    private Operation operation;


    public CalculatorModel toModel() {
        return CalculatorModel.builder()
                .id(id)
                .input1(input1)
                .input2(input2)
                .result(result)
                .operation(operation.getDescription())
                .build();
    }
}
