package com.calc.controller;

import com.calc.model.CalculatorModel;
import com.calc.service.CalculatorService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
public class CalculatorController {

    private final CalculatorService calculatorService;

    public CalculatorController(CalculatorService calculatorService) {
        this.calculatorService = calculatorService;
    }

    @GetMapping("/addition")
    public Map<String, Double> addition(@RequestParam("input1") Double input1,
                                        @RequestParam("input2") Double input2) {
        return calculatorService.addition(input1, input2);
    }

    @GetMapping("/subtraction")
    public Map<String, Double> subtraction(@RequestParam("input1") Double input1,
                                           @RequestParam("input2") Double input2) {
        return calculatorService.subtraction(input1, input2);
    }

    @GetMapping("/multiplication")
    public Map<String, Double> multiplication(@RequestParam("input1") Double input1,
                                              @RequestParam("input2") Double input2) {
        return calculatorService.multiplication(input1, input2);
    }

    @GetMapping("/division")
    public Map<String, Double> division(@RequestParam("input1") Double input1,
                                        @RequestParam("input2") Double input2) {
        return calculatorService.division(input1, input2);
    }

    @GetMapping("/get-all")
    public List<CalculatorModel> getAll() {
        return calculatorService.getAll();
    }
}
