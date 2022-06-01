import React, { useState, useEffect } from 'react';

const BoardBuilder = () => {

  //const [newBoard, setNewBoard] = useState([]);
  const [steps, setSteps] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/steps")
    .then(r => r.json())
    .then((data) => setSteps(data))
  }, []);


  return (
    <div>
      {steps.map((step) => 
        <form key={step.id}> 
          <label> {step.label}</label>
          <select 
            name="deck"
            aria-label="deck"
          >
            {step.parts.map((part) => 
              <option key={part} value={part}>{part}</option>
            )}
          Select One</select>
        </form>
      )}
    </div>
  )
}

export default BoardBuilder;