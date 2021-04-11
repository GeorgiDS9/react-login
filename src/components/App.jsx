import React, { useState } from "react";

function App() {
  // Create hooks (complex state with an object passed to the useState function)
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function handleChange(e){
    // const newValue = e.target.value;
    // const inputName = e.target.name;

    const [value, name] = e.target;

    setFullName(prevValue => {
      if (inputName === "fName"){
        return {
          fName: value,
          lName: prevValue.lName
        }
      } else if (inputName === "lName"){
        return {
          fName: prevValue.fName,
          lName: value
        }
      }
      });
    }

  return (
    <div className="container">
      <h1>Hello {fullName.fName} {fullName.lName}</h1>
      <form>
        <input 
          name="fName" 
          onChange={handleChange} 
          placeholder="First Name" 
          value={fullName.fName} 
        />
        <input 
          name="lName" 
          onChange={handleChange} 
          placeholder="Last Name" 
          value={fullName.lName} 
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;