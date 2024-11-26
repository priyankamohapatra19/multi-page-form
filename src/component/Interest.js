import { useEffect, useState } from "react";

const Interest = ({ setActiveTab }) => {
  const [formDetail, setFormDetail] = useState({
    hobby: "",
    genre: [
      { field: "Fiction", isChecked: false },
      { field: "Non-Fiction", isChecked: false },
      { field: "Mystery", isChecked: false },
      { field: "Fantasy", isChecked: false },
    ],
  });
  useEffect(() => {
    if (typeof localStorage.getItem === "undefined") {
      return;
    }
    const data = JSON.parse(localStorage.getItem("interests"));
    setFormDetail(data);
  }, []);

  const handleHobbies = (e) => {
    setFormDetail({ ...formDetail, hobby: e.target.value });
  };
  const handleCheckbox = (e, index) => {
    const newObj = { ...formDetail };
    const newArr = [...newObj.genre];
    let obj = newArr[index];
    newArr[index] = { ...obj, isChecked: !obj.isChecked };
    setFormDetail({ ...formDetail, genre: newArr });
  };
  const handleNext = () => {
    localStorage.setItem("interests", JSON.stringify(formDetail));
    setActiveTab("Settings");
  };

  return (
    <div>
      <div>
        <select onChange={(e) => handleHobbies(e)}>
          <option value="">Hobbies</option>
          <option value="Football">Footbal</option>
          <option value="Cricket">Cricket</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <p>{formDetail.hobby}</p>
      <div>
        {formDetail?.genre.map((item, index) => {
          return (
            <div>
              <input
                type="checkbox"
                checked={item.isChecked}
                onChange={(e) => handleCheckbox(e, index)}
              />
              {item?.field}
            </div>
          );
        })}
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};
export default Interest;
