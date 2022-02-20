package com.calc.model;

import lombok.Builder;
import lombok.Data;
import lombok.Value;


@Data
@Value
@Builder
public class CalculatorModel {

    Long id;

    Double input1;

    Double input2;

    Double result;

    String operation;
}
