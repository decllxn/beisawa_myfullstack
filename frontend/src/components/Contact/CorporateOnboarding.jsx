import React, { useEffect } from "react";

const Feedback = () => {
  useEffect(() => {
    const inputs = document.querySelectorAll(".input");

    const focusFunc = (e) => {
      e.target.parentNode.classList.add("focus");
    };

    const blurFunc = (e) => {
      if (e.target.value === "") {
        e.target.parentNode.classList.remove("focus");
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

  return (
    <>
      <div className="input-container">
        <input type="text" name="name" className="input" />
        <label htmlFor="name">Company name</label>
        <span>Company name</span>
      </div>
      <div className="input-container">
        <input type="email" name="email" className="input" />
        <label htmlFor="email">Email</label>
        <span>Email</span>
      </div>
      <div className="input-container">
        <input type="tel" name="phone" className="input" />
        <label htmlFor="phone">Phone</label>
        <span>Phone</span>
      </div>
      <div className="input-container textarea">
        <textarea name="message" className="input"></textarea>
        <label htmlFor="message">Onboarding Details</label>
        <span>Onboarding Details</span>
      </div>
    </>
  );
};

export default Feedback;