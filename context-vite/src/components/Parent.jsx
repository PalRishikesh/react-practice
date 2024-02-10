import Children from "./Children";
const Parent = ({ secret }) => {
  return (
    <div className="parent">
      <h3> {`Parent ${secret.familyName}`}</h3>
      <p>{secret.onlyParentCanSee()}</p>
      <Children secret={secret} />
    </div>
  );
};

export default Parent;
