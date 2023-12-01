interface Props {
  bmi: number;
}

const BmiResult = ({ bmi }: Props) => {
  const checkBmiResult = () => {
    if (bmi <= 0) return "กรุณาลองใหม่อีกครั้ง!!";
    if (bmi < 18.5) return "อยู่ในเกณฑ์น้ำหนักน้อย | ผอม";
    if (bmi < 25) return "อยู่ในเกณฑ์น้ำหนักปกติ | สุขภาพดี";
    if (bmi < 30) return "อยู่ในเกณฑ์น้ำหนักท้วม | อ้วนระดับ 1";
    if (bmi < 35) return "อยู่ในเกณฑ์น้ำหนักอ้วน | อ้วนระดับ 2";
    if (bmi >= 35) return "อยู่ในเกณฑ์น้ำหนักอ้วนมาก | อ้วนระดับ 3";
  };

  const getResultClass = () => {
    if (bmi < 18.5) return "gray";
    if (bmi < 25) return "green";
    if (bmi < 30) return "yellow";
    if (bmi < 35) return "orange";
    return "red";
  };
  return (
    <>
      <div className="result">
        <p>ค่า BMI คือ {bmi}</p>
        <p>ผลลัพธ์</p>
        <p className={getResultClass()}>{checkBmiResult()}</p>
      </div>
    </>
  );
};

export default BmiResult;
