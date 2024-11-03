import { useState } from 'react';
const Button = (props) => (
  <button onClick={props.onClickHandler}>{props.text} </button>
);
const Paragraph = (props) => <p>{props.value}</p>;
const Header = (props) => <h1>{props.value}</h1>;
const MostVotes = (props) => {
  const max_value = Math.max(...props.votes);
  const i = props.votes.indexOf(max_value);
  return (
    <>
      <Header
        value={'Anecdote with most votes is with ' + props.votes[i] + ' votes'}
      />
      <Paragraph value={props.anecdotes[i]} />
    </>
  );
};
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
  ];

  // const votes = new Array(8).fill(0);
  const [votes, setVotes] = useState(new Array(8).fill(0));
  const [selected, setSelected] = useState(0);
  const onVoteHandler = () => {
    votes[selected] = votes[selected] + 1;
    const copy = [...votes];
    setVotes(copy);
  };
  const onNextAnecdote = () => {
    const newSelected = Math.floor(Math.random() * 7);

    setSelected(newSelected);
  };
  return (
    <>
      <Header value="Anecdote of the day" />
      <Paragraph value={anecdotes[selected]}></Paragraph>
      <Paragraph value={votes[selected]}></Paragraph>
      <Button
        text="vote"
        onClickHandler={onVoteHandler}
      />
      <Button
        text="next anecdote"
        onClickHandler={onNextAnecdote}
      />

      <Header value="Anecdote with most votes" />
      <MostVotes
        anecdotes={anecdotes}
        votes={votes}
      />
    </>
  );
};

export default App;
