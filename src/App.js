import React, { useState } from "react";
import "./App.css";

function App() {
  const [input1, setinput1] = useState("");
  const [input2, setinput2] = useState("");
  const [input3, setFlames] = useState("");

  let inp1 = input1;
  let inp2 = input2;
  let count = 0;
  let flames = input1.length + input2.length;

  function calc() {
    if (inp1 !== "" && inp2 !== "") {
      for (let i = 0; i < inp1.length; i++) {
        for (let j = 0; j < inp2.length; j++) {
          if (inp1[i] === inp2[j]) {
            inp1 = inp1.replace(inp1[i], "0");
            inp2 = inp2.replace(inp2[j], "1");
            count = count + 2;
            console.log(" inp1 ", inp1);
            console.log(" inp2 ", inp2);
            break;
          }
        }
      }
      flames = flames - count;
      flames = flames % 6;
      switch (flames) {
        case 1:
          flames = "Friends";
          break;
        case 2:
          flames = "Love";
          break;
        case 3:
          flames = "Affection";
          break;
        case 4:
          flames = "Marriage";
          break;
        case 5:
          flames = "Enemy";
          break;
        case 0:
          flames = "Siblings";
          break;
        default:
          flames = "";
      }
      setFlames(flames);
      console.log("flames", flames);
    } else {
      setFlames("Please Enter valid input");
    }
    console.log(" inp1 ", inp1);
    console.log(" inp2 ", inp2);
    console.log(" count ", count);
  }

  function clear() {
    setinput1("");
    setinput2("");
    setFlames("");
  }

  return (
    <div className="App">
      <input
        type="text"
        id="input1"
        value={input1}
        onChange={(e) => {
          setinput1(e.target.value);
        }}
      />
      <input
        type="text"
        id="input2"
        value={input2}
        onChange={(e) => {
          setinput2(e.target.value);
        }}
      />
      <br />
      <button onClick={calc} id="calculate_relationship">
        calculate_relationship
      </button>
      <button onClick={clear} id="clear">
        clear
      </button>
      <h3>{input3}</h3>
    </div>
  );
}

export default App;
