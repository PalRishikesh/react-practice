import useCounter from "../Utilities/user-counter";

const Decrement = () => {
  let counter = useCounter(false);
  return <div>{counter}</div>;
};

export default Decrement;
