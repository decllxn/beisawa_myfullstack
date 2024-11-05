// src/components/FormInput.jsx
import React, { useState } from "react";
import styles from "./Forms.module.css";

const FormInput = ({ type = "text", label, name }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = (event) => {
    if (!event.target.value) {
      setIsFocused(false);
    }
  };

  return (
    <div className={`${styles.inputContainer} ${isFocused ? styles.focus : ""}`}>
      {type === "textarea" ? (
        <textarea
          name={name}
          className={styles.input}
          onFocus={handleFocus}
          onBlur={handleBlur}
          required
        ></textarea>
      ) : (
        <input
          type={type}
          name={name}
          className={styles.input}
          onFocus={handleFocus}
          onBlur={handleBlur}
          required
        />
      )}
      <label>{label}</label>
      <span>{label}</span>
    </div>
  );
};

export default FormInput;