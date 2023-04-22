/*     We're using the useState hook to define three state variables:
        - num1 represents the first integer input value, with an initial 
        value of 0.
        - num2 represents the second integer input value, also with an 
        initial value of 0.
        - operator represents the selected arithmetic operator, with an 
        initial value of +.
    We're defining three helper functions to handle changes to the input 
    fields and operator selection:
        - handleNum1Change is called when the first integer input field 
        is changed. It updates the num1 state variable with the new value.
        - handleNum2Change is called when the second integer input field 
        is changed. It updates the num2 state variable with the new value.
        - handleOperatorChange is called when the operator dropdown menu 
        is changed. It updates the operator state variable with the new value.
        - handleReset that sets both num1 and num2 to 0 and the operator 
        to +. We're calling this function when the reset button is clicked.
    We're defining a calculateResult function that computes the result 
    based on the selected operator and input values.
    We're rendering four elements:
        - Two label elements that contain input fields for the first and 
        second integers, respectively.
        - We have four separate buttons for each operation. Each button 
        has a className property that conditionally sets the selected class 
        when the operator matches the selected operator. (+, -, *, and /).
        - A button element that triggers the calculation when clicked.
        - A p element that displays the result of the calculation.

Overall, the Calculator component is a simple form that allows the user
to select two integers and an arithmetic operator, and then calculates and 
displays the result. The component is written in TypeScript and uses React 
hooks (useState) to manage state and update the UI.
*/

import { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operator, setOperator] = useState("+");

  function handleNum1Change(event: React.ChangeEvent<HTMLInputElement>) {
    setNum1(parseInt(event.target.value));
  }

  function handleNum2Change(event: React.ChangeEvent<HTMLInputElement>) {
    setNum2(parseInt(event.target.value));
  }

  //   function handleOperatorChange(event: React.ChangeEvent<HTMLSelectElement>) {
  //     setOperator(event.target.value);
  //   }

  function handleOperatorClick(newOperator: string) {
    setOperator(newOperator);
  }

  function handleReset() {
    setNum1(0);
    setNum2(0);
    setOperator("+");
  }

  function calculateResult(): number {
    switch (operator) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        return num1 / num2;
      default:
        return 0;
    }
  }

  return (
    <div className="container">
      <h1>Calculate Me!</h1>
      <p>
        <label className="intOneLabel">Integer One</label>
      </p>
      <p className="intOneField">
        <input type="number" value={num1} onChange={handleNum1Change} />
      </p>
      <p className="operatorLabel">Choose Operation:</p>
      <p className="operator">
        <button
          className={operator === "+" ? "selected" : ""}
          onClick={() => handleOperatorClick("+")}
        >
          +
        </button>
        <button
          className={operator === "-" ? "selected" : ""}
          onClick={() => handleOperatorClick("-")}
        >
          -
        </button>
        <button
          className={operator === "*" ? "selected" : ""}
          onClick={() => handleOperatorClick("*")}
        >
          *
        </button>
        <button
          className={operator === "/" ? "selected" : ""}
          onClick={() => handleOperatorClick("/")}
        >
          /
        </button>
      </p>

      <p>
        <label className="intTwoLabel">Integer Two</label>
      </p>
      <p className="intTwoField">
        <input type="number" value={num2} onChange={handleNum2Change} />
      </p>
      <p className="result">Result: {calculateResult()}</p>
      <p className="reset">
        <button onClick={handleReset}>Reset Integers</button>
      </p>
    </div>
  );
}

export default Calculator;
