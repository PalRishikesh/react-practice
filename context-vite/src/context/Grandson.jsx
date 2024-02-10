import { FamilyContext } from "./FamilyContext";
import { useContext } from "react";
const Grandson = () => {
  const secret = useContext(FamilyContext);
  return (
    <div className="gson">
        <h3>{`Grandson ${secret.familyName}`} </h3>
        <p>{secret.onlyGrandChildrenShouldKnow()}</p>
    </div>
  )
}
export default Grandson