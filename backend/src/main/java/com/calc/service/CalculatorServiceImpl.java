package com.calc.service;

import com.calc.entity.CalculatorEntity;
import com.calc.model.CalculatorModel;
import com.calc.model.InputWrapper;
import com.calc.model.Operation;
import com.calc.repository.CalculatorRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class CalculatorServiceImpl implements CalculatorService {

    private final CalculatorRepository calculatorRepository;

    public CalculatorServiceImpl(CalculatorRepository calculatorRepository) {
        this.calculatorRepository = calculatorRepository;
    }

    @Override
    public Map<String, Double> addition(Double input1, Double input2) {
        var inputWrapper = new InputWrapper(input1, input2);
        swap(inputWrapper);
        return findByOperation(inputWrapper.getInput1(), inputWrapper.getInput2(), Operation.ADDITION);
    }

    @Override
    public Map<String, Double> subtraction(Double input1, Double input2) {
        return findByOperation(input1, input2, Operation.SUBTRACTION);
    }

    @Override
    public Map<String, Double> multiplication(Double input1, Double input2) {
        var inputWrapper = new InputWrapper(input1, input2);
        swap(inputWrapper);
        return findByOperation(inputWrapper.getInput1(), inputWrapper.getInput2(), Operation.MULTIPLICATION);
    }

    @Override
    public Map<String, Double> division(Double input1, Double input2) {
        return findByOperation(input1, input2, Operation.DIVISION);
    }

    @Override
    public List<CalculatorModel> getAll() {
        return calculatorRepository.findAll().stream().map(CalculatorEntity::toModel).collect(Collectors.toList());
    }

    private void swap(InputWrapper inputWrapper) {
        if (inputWrapper.getInput1() > inputWrapper.getInput2()) {
            Double temp = inputWrapper.getInput2();
            inputWrapper.setInput2(inputWrapper.getInput1());
            inputWrapper.setInput1(temp);
        }
    }

    private Map<String, Double> findByOperation(Double number1, Double number2, Operation operation) {
        var result = calculatorRepository.findByInput1AndInput2AndOperation(number1, number2, operation);
        if (result.isPresent()) {
            return Map.of("result", result.get().getResult());
        }
        var operationResult = calculateResult(number1, number2, operation);
        var calculatorEntity = CalculatorEntity.builder()
                .input1(number1)
                .input2(number2)
                .result(operationResult)
                .operation(operation).build();

        calculatorEntity = calculatorRepository.save(calculatorEntity);
        return Map.of("result", calculatorEntity.getResult());
    }

    private Double calculateResult(Double number1, Double number2, Operation addition) {
        switch (addition) {
            case ADDITION:
                return number1 + number2;
            case SUBTRACTION:
                return number1 - number2;
            case MULTIPLICATION:
                return number1 * number2;
            case DIVISION:
                return number1 / number2;
            default:
                return 0d;
        }
    }
}
