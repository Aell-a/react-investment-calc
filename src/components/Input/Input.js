import { useState } from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  const initialInput = {
    "current-savings": 10000,
    "yearly-contribution": 1200,
    "expected-return": 7,
    duration: 10,
  };
  const [input, setInput] = useState(initialInput);

  const submitHandler = (e) => {
    e.preventDefault();

    props.onCalculate(input);
  };

  const resetHandler = () => {
    setInput(initialInput);
  };

  const changeHandler = (input, value) => {
    setInput((prevInput) => {
      return {
        ...prevInput,
        [input]: +value,
      };
    });
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={(e) => {
              changeHandler("current-savings", e.target.value);
            }}
            value={input["current-savings"]}
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            onChange={(e) => {
              changeHandler("yearly-contribution", e.target.value);
            }}
            value={input["yearly-contribution"]}
            type="number"
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={(e) => {
              changeHandler("expected-return", e.target.value);
            }}
            value={input["expected-return"]}
            type="number"
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={(e) => {
              changeHandler("duration", e.target.value);
            }}
            value={input["duration"]}
            type="number"
            id="duration"
          />
        </p>
      </div>
      <p className={classes.actions}>
        <button
          onClick={resetHandler}
          type="reset"
          className={classes.buttonAlt}
        >
          Reset
        </button>
        <button type="submit" className={classes.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default Input;
