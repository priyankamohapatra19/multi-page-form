import { useState, useEffect } from "react";

const Setting = ({ setActiveTab }) => {
  const [setting, setSetting] = useState([
    { field: "Notification: Optional", isChecked: false },
    {
      field: "Privacy level: Required, one option must be selected",
      isChecked: false,
    },
  ]);

  useEffect(() => {
    if (typeof localStorage.getItem("setting") === undefined) {
      return;
    }
    const data = JSON.parse(localStorage.getItem("setting"));
    setSetting(data);
  }, []);

  const handleCheckbox = (e, idx) => {
    const newArr = [...setting];
    let obj = newArr[idx];
    newArr[idx] = { ...obj, isChecked: !obj.isChecked };
    setSetting(newArr);
  };
  const handleSubmit = () => {
    localStorage.setItem("setting", JSON.stringify(setting));
    setActiveTab("final");
  };

  console.log("setting: ", setting);

  return (
    <div>
      {setting.map((item, idx) => {
        return (
          <div>
            <input
              type="checkbox"
              checked={item.isChecked}
              onChange={(e) => handleCheckbox(e, idx)}
            />
            {item.field}
          </div>
        );
      })}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
export default Setting;
