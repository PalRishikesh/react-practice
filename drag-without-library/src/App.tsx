import React, { useEffect, useRef } from "react";
import "./App.css";

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  const isClicked = useRef<boolean>(false);


  const coords = useRef<{
    startX:number,
    startY:number,
    endX:number,
    endY:number
  }>({
    startX:0,
    startY:0,
    endX:0,
    endY:0
  })

  useEffect(() => {
    if (!boxRef.current || !containerRef.current) return;

    const box = boxRef.current;
    const container = boxRef.current;

   

    const onMouseDownBtn = (e: MouseEvent) => {
      isClicked.current = true;
      // Store current position of mouse in screen
      coords.current.startX = e.clientX;
      coords.current.startY = e.clientY;
    };
    const onMouseUpBtn = (e: MouseEvent) => {
      console.log("yup");
      
      isClicked.current = false;
      coords.current.endX = e.clientX;
      coords.current.endY = e.clientY;
    };

    const onMouseMove = (e: MouseEvent) => {
      // If mouse is already click on box
      if (!isClicked.current) return;
      
      // How much we should move by separting current change from actual position
      const nextX = e.clientX - coords.current.startX + coords.current.endX;
      const nextY = e.clientY - coords.current.startY + coords.current.endY;

      box.style.top = `${nextY}px`;
      box.style.left = `${nextX}px`;
    };

    box.addEventListener("mousedown", onMouseDownBtn);
    box.addEventListener("mouseup", onMouseUpBtn);
    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseleave", onMouseUpBtn);

    // Clean up function
    const cleanUp = () => {
      box.removeEventListener("mousedown", onMouseDownBtn);
      box.removeEventListener("mouseup", onMouseUpBtn);
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseleave", onMouseUpBtn);
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
