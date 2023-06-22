import { useState } from "react";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import Results from "./components/Results/Results";

function App() {
  const [input, setInput] = useState(null);

  const calculateHandler = (input) => {
    setInput(input);
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...
  };

  const yearlyData = []; // per-year results

  if (input) {
    let currentSavings = +input["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +input["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +input["expected-return"] / 100;
    const duration = +input["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header />
      <Input onCalculate={calculateHandler} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      {!input && (
        <p style={{ textAlign: "center" }}>
          Enter your info and click Calculate
        </p>
      )}
      {input && (
        <Results data={yearlyData} initial={input["current-savings"]} />
      )}
    </div>
  );
}

export default App;
