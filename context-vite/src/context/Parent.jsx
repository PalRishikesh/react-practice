import Children from "./Children";
import { FamilyContext } from "./FamilyContext"; // This is context
import { useContext } from "react"; // This is use context hook

const Parent = () => {
  // Insted of passing information from props we can use it from here
  const secret = useContext(FamilyContext);
  return (
    <div className="parent">
      <h3> {`Parent ${secret.familyName}`}</h3>
      <p>{secret.onlyParentCanSee()}</p>
      <Children />
    </div>
  );
};

export default Parent;
