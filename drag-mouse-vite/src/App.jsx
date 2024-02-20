import { useEffect, useRef } from "react";

function App() {
  const containerRef = useRef();
  const boxRef = useRef();
  const isClicked = useRef(false);

  const coards = useRef({
    startY:0,
    startX:0,
    endY:0,
    endX:0
  })

  useEffect(() => {
    if (!containerRef.current || !boxRef.current) return;

    const container = containerRef.current;
    const box = boxRef.current;

    const onMouseDownBtn = (e) => {
      isClicked.current = true;
      coards.current.startY = e.clientY
      coards.current.startX = e.clientX
    };
    const onMouseUpBtn = (e) => {
      isClicked.current = false;
      coards.current.endY = e.clientY
      coards.current.endX = e.clientX
    };

    const onMouseMoveContainer = (e)=>{
      // console.log(" e.clientX: ", e.clientX);
      if(isClicked.current){
        const nextX = e.clientX - coards.current.startX + coards.current.endX;

        const nextY = e.clientY - coards.current.startY + coards.current.endY;
        box.style.top  = `${nextY}px`;
        box.style.left  = `${nextX}px`;
        console.log(" e.clienty: ", e.clientY);
      }
    }
    // addEventListener
    box.addEventListener("mousedown", onMouseDownBtn);
    box.addEventListener("mouseup", onMouseUpBtn);
    container.addEventListener("mousemove",onMouseMoveContainer)

    // Clean up
    const cleanUp = () => {
      box.removeEventListener("mousedown", onMouseDownBtn);
      box.removeEventListener("mouseup", onMouseUpBtn);
      container.removeEventListener("mousemove",onMouseMoveContainer)
    };
    return cleanUp;
  }, []);

  return (
    <main>
      <div ref={containerRef} className="container">
        <div ref={boxRef} className="box"></div>
      </div>
    </main>
  );
}

export default App;
