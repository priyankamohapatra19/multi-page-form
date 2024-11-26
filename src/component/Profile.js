import { useEffect, useState } from "react";

const Profile = ({ setActiveTab }) => {
  const [profile, setProfile] = useState({
    name: "",
    mail: "",
    number: "",
    address: "",
  });
  const [emptyFields, setEmptyFields] = useState([]);

  useEffect(() => {
    if (typeof localStorage.getItem("profile") === "undefined") {
      return;
    }
    const data = JSON.parse(localStorage.getItem("profile"));
    setProfile(data);
  }, []);

  const validateForm = () => {
    const emptyFields = [];
    for (let key in profile) {
      if (profile[key] === "") {
        emptyFields.push(key);
      }
    }
    return emptyFields;
  };

  const handleNext = () => {
    const emptyFieldsErr = validateForm();
    if (emptyFieldsErr.length > 0) {
      setEmptyFields(emptyFieldsErr);
      return;
    } else {
      setEmptyFields([]);
      setActiveTab("Interest");
      localStorage.setItem("profile", JSON.stringify(profile));
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="name"
        value={profile.name}
        onChange={(e) => setProfile({ ...profile, name: e.target.value })}
        className={emptyFields.includes("name") && "error"}
      />
      <input
        type="mail"
        placeholder="email"
        value={profile.mail}
        onChange={(e) => setProfile({ ...profile, mail: e.target.value })}
        className={emptyFields.includes("mail") && "error"}
      />
      <input
        type="number"
        placeholder="number"
        value={profile.number}
        onChange={(e) => setProfile({ ...profile, number: e.target.value })}
        className={emptyFields.includes("number") && "error"}
      />
      <input
        type="text"
        placeholder="address"
        value={profile.address}
        onChange={(e) => setProfile({ ...profile, address: e.target.value })}
        className={emptyFields.includes("address") && "error"}
      />
      <button onClick={handleNext}>Next</button>
    </div>
  );
};
export default Profile;
