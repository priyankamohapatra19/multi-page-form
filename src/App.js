import { useState, useEffect } from "react";
import Profile from "./component/Profile";
import Interest from "./component/Interest";
import Setting from "./component/Setting";
import Final from "./component/Final";

import "./styles.css";

const tabs = [
  { title: "Profile" },
  { title: "Interest" },
  { title: "Settings" },
];

export default function App() {
  const [activeTab, setActiveTab] = useState("Profile");
  const [show, setShow] = useState(true);
  useEffect(() => {
    if (activeTab === "final") {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [activeTab]);
  return (
    <div className="App">
      <div className="btn-container">
        {show &&
          tabs.map((tab, index) => {
            return (
              <button onClick={() => setActiveTab(tab.title)}>
                {tab.title}
              </button>
            );
          })}
      </div>
      <div>
        {activeTab === "Profile" && <Profile setActiveTab={setActiveTab} />}
        {activeTab === "Interest" && <Interest setActiveTab={setActiveTab} />}
        {activeTab === "Settings" && <Setting setActiveTab={setActiveTab} />}
        {activeTab === "final" && <Final />}
      </div>
    </div>
  );
}
