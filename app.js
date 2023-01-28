import "./styles.css";
import React, { useState } from "react";


export default function App() {
  const [myArray, setMyArray] = useState([
    { id: 1, value: '' },
    { id: 2, value: '' },
  ]);


  const handleUpdate = (id, newValue) => {
    const updatedArray = myArray.map((item) => {
      if (item.id === id) {
        return { ...item, value: newValue };
      }
      return item;
    });
    setMyArray(updatedArray);
  };

  console.log("myArray ===>", myArray)
  return (
    <div className="App">
      {myArray.map((item) => (
        <div key={item.id}>
          <input
            value={item.value}
            onChange={(e) => handleUpdate(item.id, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
}
