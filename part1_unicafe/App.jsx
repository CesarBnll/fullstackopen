import { useState } from 'react'

const StatLine = (props) => {
  var value = props.value
  if (props.text == "Positive = ") {
    value = String(props.value)
    value += '%'
  }

  return (
    <tr>
      <td>{props.text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad

  const avg = (props.good - props.bad)/total

  const positive = (props.good * 100)/total

  if (props.good == 0 && props.neutral == 0 && props.bad == 0) {
    return (
      <>
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </>
    )
  } else {
    return (
      <>
        <h2>Statistics</h2>
        <table>
          <tbody>
            <StatLine text="Good" value={props.good} />
            <StatLine text="Neutral" value={props.neutral} />
            <StatLine text="Bad" value={props.bad} />
            <StatLine text="All" value={total} />
            <StatLine text="Average" value={avg} />
            <StatLine text="Positive" value={positive} />
          </tbody>
        </table>
      </>
    )
  }
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(bad + 1)}>Bad</button>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App