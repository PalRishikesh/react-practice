import GrandDaugher from "./GrandDaugher";
import Grandson from "./Grandson";
import { FamilyContext } from "./FamilyContext";
import { useContext } from "react";


const Children = () => {
  const secret = useContext(FamilyContext);
  return (
    <div className="children">
      <h2>{`Children ${secret.familyName}`}</h2>
      <Grandson />
      <GrandDaugher />
    </div>
  );
};

export default Children;
