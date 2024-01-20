import { useState } from "react";
import Modal from "./Modal";
import PortalComponent from "./PortalComponent";

const Component2 = () => {
  const [showModal, setShowModal] = useState(false);
  function displayModalFn() {
    setShowModal(true);
  }
  function hideModalFn() {
    setShowModal(false);
  }
  return (
    <div style={{ width: 300, position: "relative" }}>
      <div>Component2</div>
      {/* <PortalComponent/> */}
      <button onClick={displayModalFn}>Show Modal</button>
      <Modal showModal={showModal} hideMoalAttribute={hideModalFn} />
    </div>
  );
};
export default Component2;
