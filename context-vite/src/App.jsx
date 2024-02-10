import { useState } from "react";
import "./App.css";

// Using normal props
// import Family from "./components/prop-drill/Family";
// const familySecret = {
//   familyName: "The Pal",
//   onlyParentCanSee: () => {
//     return `The Baghel are the best`;
//   },
//   onlyGrandChildrenShouldKnow: () => {
//     return `They are the best`;
//   },
// };

// function App() {
//   return (
//     <>
//       <Family secret={familySecret} />
//     </>
//   );
// }

import Family from "./context/Family";
import { FamilyContext } from "./context/FamilyContext";

const familySecret = {
  familyName: "The Pal",
  onlyParentCanSee: () => {
    return `The Baghel are the best`;
  },
  onlyGrandChildrenShouldKnow: () => {
    return `They are the best`;
  },
};

function App() {
  return (
    <FamilyContext.Provider value={familySecret}>
      <Family />
    </FamilyContext.Provider>
  );
}
export default App;
