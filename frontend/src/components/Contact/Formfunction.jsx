import { useEffect, useRef } from "react";

const useInputFocusEffect = () => {
  const inputsRef = useRef([]);

  useEffect(() => {
    const inputs = inputsRef.current;

    function focusFunc(event) {
      let parent = event.target.parentNode;
      parent.classList.add("focus");
    }

    function blurFunc(event) {
      let parent = event.target.parentNode;
      if (event.target.value === "") {
        parent.classList.remove("focus");
      }
    }

    inputs.forEach((input) => {
      input.addEventListener("focus", focusFunc);
      input.addEventListener("blur", blurFunc);
    });

    // Cleanup event listeners on unmount
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