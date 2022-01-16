import React, { useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState([]);
  const [inputData, setInputData] = useState("");
  const [unitData, setUnitData] = useState("");
  const [quantityData, setQuantityData] = useState("");

  const handleAddItem = () => {
    const newList = [
      ...list,
      { title: inputData, units: unitData, quantity: quantityData, isPurchased: false }
    ];
    setList(newList);
    setInputData("");
    setUnitData("");
    setQuantityData("");
    console.log(newList);
  };

  const handRemoveItem = (index) => {
    const newList = [];
    for (let i = 0; i < list.length; i++) {
      if (index != i) {
        list[i].isPurchased = !list[i].isPurchased //toggles value
        newList.push(list[i]);
      }
    }
    setList(newList);
  };

  return (
    <div className="App">
      <div className="input">
        <h1>List of Groceries </h1>
        <input
          type="text"
          value={inputData}
          placeholder="itemName"
          onChange={(event) => setInputData(event.target.value)}
        />
        <input
          type="text"
          value={quantityData}
          placeholder="quantity"
          onChange={(event) => setQuantityData(event.target.value)}
        />
        <input
          type="text"
          value={unitData}
          placeholder="units, 2 liters, 12 pack etc."
          onChange={(event) => setUnitData(event.target.value)}
        />
        <input type="button" value="ADD" onClick={() => handleAddItem()} />
      </div>

      <div className="list"></div>
      {list.map((item, index) => {
        return (
          <div>
            <p onClick={() => handRemoveItem(index)}>
              {item.title} {item.quantity} {item.units}{" "}
            </p>
            <input type="button" value="Remove" onClick={() => handRemoveItem(index)} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
