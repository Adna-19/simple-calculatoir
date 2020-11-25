# SIMPLE JAVASCRIPT CALCULATOR

A Javascript calculator for simple calculation based on two operands.
Currently the code is not able to solve such kind of expressions.

```
12 + 4 * 3 / 5 -9
14 * 2 - 15 / 2 
```

In future, I'll try my best to make it able to handle such complex
expressions and by using operator precedence solving the problem.

In HTML file I have divided the buttons in 5 categories(html-classes),

- number
- operator
- result
- decimal
- clear

### Basically the code consists of 3 functions:

```
startCalculationProcess()
calculateValues()
clearScreenAndEmptyOperands()
```

- **startCalculationProcess()-** starts the calculation, check for the screen input, evaluates some booleans based on which type of button is triggered(from any of the above 5 categories).

- **calculateValues()-** after the selection of operands and operator, next step is to perform calculation between the operands based on the selected operator.

- **clearScreenAndEmptyOperands()-** If the user hits the C(clear-button), it sets both the operands to null, clears the screen and also empties the operator variable.