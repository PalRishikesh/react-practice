import useCounter from "../Utilities/user-counter";

const Increment = () => {
  let counter = useCounter(true);
  return <div>{counter}</div>;
};

export default Increment;
