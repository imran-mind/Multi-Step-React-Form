import "./styles.css";
import React, { useState } from "react";

const data = [
  {
    label: "name",
    type: "text"
  },
  {
    label: "email",
    type: "email"
  },
  {
    label: "dob",
    type: "date"
  },
  {
    label: "password",
    type: "password"
  }
];
export default function App() {
  const [formMeta, setFormMeta] = useState(data);
  let [index, setIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: null,
    email: null,
    dob: null,
    password: null
  });

  const handleNext = () => {
    const idx = ++index;
    console.log(idx);
    setIndex(idx);
  };

  const handleOnChange = (e) => {
    const copyData = { ...formData };
    copyData[e.target.id] = e.target.value;
    setFormData(copyData);
  };

  console.log("formdata ", formData);

  const handleBack = () => {
    if (index > 0) {
      const idx = --index;
      setIndex(idx);
    }
  };

  const handleSubmit = () => {
    console.log(JSON.stringify(formData));
  };

  return (
    <div className="App">
      <h1>Multi Step Form</h1>
      <form>
        {index > 0 && (
          <button href="" onClick={handleBack}>
            back
          </button>
        )}
        <label>{formMeta[index].label}</label>
        <input
          id={formMeta[index].label}
          type={formMeta[index].type}
          onChange={handleOnChange}
          value={formMeta[formMeta[index].label]}
          required
        />
        {index === formMeta.length - 1 ? (
          <button onClick={handleSubmit}>Submit</button>
        ) : (
          <button onClick={handleNext}>Next</button>
        )}
      </form>
    </div>
  );
}
