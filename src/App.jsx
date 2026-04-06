import ButtonsContainer from "./components/ButtonsContainer";
import styles from "./App.module.css";
import Display from "./components/Display";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonCLick = (buttonText) => {
    if (buttonText == "C"){
      setCalVal("");
    }
    else if (buttonText == "="){
      const result = eval(calVal);
      setCalVal(result);
    }
    else{
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal} />
      <ButtonsContainer onButtonClick={onButtonCLick} />
    </div>
  );
}

export default App;
