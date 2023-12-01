import React, { useState } from "react";
import BmiResult from "./components/BmiResult";
import "./App.css";

function App() {
  const [weight, setweight] = useState(0);
  const [height, setheight] = useState(0);
  const [bmi, setbmi] = useState(0);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "weight") {
      setweight(Number(value));
    } else if (name === "height") {
      setheight(Number(value));
    }
  };

  const calulateBmi = () => {
    const bmi = weight / (height / 100) ** 2;
    setbmi(bmi);
  };

  return (
    <>
      <h1 className="title">BMI Calulator</h1>
      <p className="subtitle">โปรแกรมคำนวณค่าดัชนีมวลกาย - BMI</p>

      <label htmlFor="weight">น้ำหนัก (kg.)</label>
      <input type="number" name="weight" onChange={handleOnChange} />

      <label htmlFor="height">ส่วนสูง (cm.)</label>
      <input type="number" name="height" onChange={handleOnChange} />

      <button type="button" onClick={calulateBmi}>
        คำนวณ
      </button>
      <BmiResult bmi={bmi} />
    </>
  );
}

export default App;
