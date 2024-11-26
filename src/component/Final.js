import { useState, useEffect } from "react";

const Final = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    const profile = JSON.parse(localStorage.getItem("profile"));
    const interests = JSON.parse(localStorage.getItem("interests"));
    const settings = JSON.parse(localStorage.getItem("setting"));
    // setData({ ...data, profile: profile });
    // setData({ ...data, interests: interests });
    // setData({ ...data, settings: settings });
    setData({ profile: profile, interests: interests, settings: settings });
  }, []);
  console.log("data: ", data);
  return <div></div>;
};
export default Final;
