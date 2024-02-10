import GrandDaugher from "./GrandDaugher";
import Grandson from "./Grandson";

const Children = ({ secret }) => {
  return (
    <div className="children">
      <h2>{`Children ${secret.familyName}`}</h2>
      <Grandson secret={secret} />
      <GrandDaugher secret={secret} />
    </div>
  );
};

export default Children;
