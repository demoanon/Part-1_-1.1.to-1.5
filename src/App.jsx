import React from 'react';
import { useState } from 'react';
import Button from "./Button.jsx";
import Result from "./Result";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleBadclick = () => {
    setBad(bad + 1)
  }
  const handleGoodclick = () => {
    setGood(good + 1)
  }
  const handleNeutralclick = () => {
    setNeutral(neutral + 1)
  }

  const feedback_given = good > 0 || bad > 0 || neutral > 0;


  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={handleGoodclick} text="good" />
      <Button onClick={handleNeutralclick} text="neutral" />
      <Button onClick={handleBadclick} text="bad" />
      <h1>statistics</h1>
      {feedback_given ? (<Result result={[{ button: "good", clicks: good }, { button: "neutral", clicks: neutral }, { button: "bad", clicks: bad }]} />) :
        (<p>no feedback given</p>)}
    </div>
  )
}

export default App;

