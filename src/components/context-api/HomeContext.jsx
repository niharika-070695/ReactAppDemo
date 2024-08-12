import React from "react";
import { useState } from "react";
import Details from "./Details";
import { myHomeContext } from "./MyHomeContext";

function HomeContext() {
  let [state, setState] = useState("");
  let [data, setData] = useState("");
  const submitData = () => {
    setData(state);
  };
  return (
    <div style={{ padding: "50px" }}>
      <h2>Home Context Component</h2>
      <br />
      <input
        type="text"
        placeholder="Enter text"
        onChange={(event) => {
          setState(event.target.value);
        }}
      />
      <button onClick={submitData}>Submit</button>
      <br />
      <br />
      <hr />
      <br />
      <br />
      <myHomeContext.Provider value={data}>
        <Details />
      </myHomeContext.Provider>

      <br />
      <br />
    </div>
  );
}

export default HomeContext;
