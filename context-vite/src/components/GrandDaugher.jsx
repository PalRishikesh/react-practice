const GrandDaugher = ({ secret }) => {
  return (
    <div className="gdaughter">
      <h3>{`GrandDaughter ${secret.familyName}`} </h3>
      <p>{secret.onlyGrandChildrenShouldKnow()}</p>
    </div>
  );
};

export default GrandDaugher;
