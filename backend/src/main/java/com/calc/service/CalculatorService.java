package com.calc.service;


import com.calc.model.CalculatorModel;

import java.util.List;
import java.util.Map;

public interface CalculatorService {

    Map<String, Double> addition(Double input1, Double input2);

    Map<String, Double> subtraction(Double input1, Double input2);

    Map<String, Double> multiplication(Double input1, Double input2);

    Map<String, Double> division(Double input1, Double input2);

    List<CalculatorModel> getAll();
}
