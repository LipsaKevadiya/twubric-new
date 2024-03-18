import React, { useState } from "react";
import Header from "./components/Header.jsx";
import ApiData from "./components/ApiData.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
    <div className="App">
      <Header
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
      />

      <ApiData startDate={startDate} endDate={endDate} />
    </div>
  );
}

export default App;
