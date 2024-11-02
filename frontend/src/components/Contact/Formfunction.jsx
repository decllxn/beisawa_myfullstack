import { useEffect, useRef } from "react";
import styles from "./Forms.module.css";

const useInputFocusEffect = () => {
  const inputsRef = useRef([]);

  useEffect(() => {
    const inputs = inputsRef.current;

    const focusFunc = (event) => {
      event.target.parentNode.classList.add(styles.focus);
    };

    const blurFunc = (event) => {
      if (event.target.value === "") {
        event.target.parentNode.classList.remove(styles.focus);
      }
    };

    inputs.forEach((input) => {
      input.addEventListener("focus", focusFunc);
      input.addEventListener("blur", blurFunc);
    });

    return () => {
      inputs.forEach((input) => {
        input.removeEventListener("focus", focusFunc);
        input.removeEventListener("blur", blurFunc);
      });
    };
  }, []);

  return inputsRef; // Return the ref for input elements
};

export default useInputFocusEffect;