import { useState } from 'react';
const Button = (props) => (
  <button onClick={props.onClickHandler}>{props.text} </button>
);
const StatisticLine = (props) => (
  <p>
    {props.text} {props.value}
  </p>
);
const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad;
  const percentage = (props.good / total) * 100 + '%';
  if (total === 0) {
    return (
      <>
        <p>No feedback given</p>
      </>
    );
  }
  return (
    <>
      <StatisticLine
        text="good"
        value={props.good}
      />
      <StatisticLine
        text="neutral"
        value={props.neutral}
      />
      <StatisticLine
        text="bad"
        value={props.bad}
      />
      <StatisticLine
        text="all"
        value={total}
      />
      <StatisticLine
        text="average"
        value={(props.good - props.bad) / total}
      />
      <StatisticLine
        text="positive"
        value={percentage}
      />
    </>
  );
};
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button
        text="good"
        onClickHandler={() => {
          setGood(good + 1);
        }}
      />
      <Button
        text="neutral"
        onClickHandler={() => {
          setNeutral(neutral + 1);
        }}
      />
      <Button
        text="bad"
        onClickHandler={() => {
          setBad(bad + 1);
        }}
      />
      <h2> statistics</h2>
      <Statistics
        good={good}
        bad={bad}
        neutral={neutral}
      />
    </div>
  );
};

export default App;
