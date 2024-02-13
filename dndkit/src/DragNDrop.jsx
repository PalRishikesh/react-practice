// import React, { useRef, useState } from "react";

// const DragNDrop = ({ data }) => {
//   const [list, setList] = useState(data);
//   const [dragging, setDragging] = useState(false);

//   const dragItem = useRef();
//   const dragNode = useRef();
  
//   const handleDragStart = (e, params) => {
//     console.log(params);
//     dragItem.current = params;
//     dragNode.current = e.target;
//     setTimeout(() => {
//     setDragging(true);

//     }, 0);

//   };

//   // const handleDragEnter=(e, params)=>{
//   // console.log("Enter dragg",params);
//   // const currentItem = dragItem.current;

//   // if(e.target!== dragNode.current){
//   //   console.log("Target is not same");
//   //   setList(oldList=>{
//   //     let newList = JSON.parse(JSON.stringify(oldList));
//   //     newList[params.grpI].items.splice(params.itemI,0,newList[currentItem.grpI].items.splice(currentItem.itemI,1)[0])
//   //     dragItem.current = params;
//   //     return newList;
//   //   })
//   // }
//   // }

//   const handleDragEnter = (e, targetItem) => {
//     console.log('Entering a drag target', targetItem)
//     if (dragNode.current !== e.target) {
//         console.log('Target is NOT the same as dragged item')
//         setList(oldList => {
//             let newList = JSON.parse(JSON.stringify(oldList))
//             newList[targetItem.grpI].items.splice(targetItem.itemI, 0, newList[dragItem.current.grpI].items.splice(dragItem.current.itemI,1)[0])
//             dragItem.current = targetItem;
//             localStorage.setItem('List', JSON.stringify(newList));
//             return newList
//         })
//     }
// }
//   const getsStyle=(params)=>{
//     const currentItem = dragItem.current;
//     if(currentItem.grpI === params.grpI && currentItem.itemI === params.itemI){
//       return 'current dnd-item';
//     }
//     return 'dnd-item';
   
//   }
// const handleEndEvent=()=>{
//   setDragging(false);
//   dragItem.current = null
//   dragNode.current = null;
// }
//   return (
//     <div className="drag-n-drop">
//       {list.map((grp, grpI) => (
//         <div key={grp.title} className="dnd-group">
//           <div className="group-title">{grp.title}</div>
//           {grp.items.map((item, itemI) => (
//             <div
//               draggable
//               onDragStart={(e) => {
//                 handleDragStart(e, { grpI, itemI });
//               }}
//               onDragEnd={handleEndEvent}
//               onDragEnter={dragging?(e)=>{handleDragEnter(e,grpI,itemI)}:null}
//               key={item}
//               className={dragging?getsStyle({grpI, itemI}):"dnd-item"}
//             >
//               {item}
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DragNDrop;
import React, {useState, useRef, useEffect} from 'react'

function DragNDrop({data}) {

    const [list, setList] = useState(data); 
    const [dragging, setDragging] = useState(false);

    useEffect(() => {
        setList(data);
    }, [setList, data])

    const dragItem = useRef();
    const dragItemNode = useRef();
    
    const handletDragStart = (e, item) => {
        console.log('Starting to drag', item)

        dragItemNode.current = e.target;
        dragItemNode.current.addEventListener('dragend', handleDragEnd)
        dragItem.current = item;

        setTimeout(() => {
            setDragging(true); 
        },0)       
    }
    const handleDragEnter = (e, targetItem) => {
        console.log('Entering a drag target', targetItem)
        if (dragItemNode.current !== e.target) {
            console.log('Target is NOT the same as dragged item')
            setList(oldList => {
                let newList = JSON.parse(JSON.stringify(oldList))
                newList[targetItem.grpI].items.splice(targetItem.itemI, 0, newList[dragItem.current.grpI].items.splice(dragItem.current.itemI,1)[0])
                dragItem.current = targetItem;
                localStorage.setItem('List', JSON.stringify(newList));
                return newList
            })
        }
    }
    const handleDragEnd = (e) => {
        setDragging(false);
        dragItem.current = null;
        dragItemNode.current.removeEventListener('dragend', handleDragEnd)
        dragItemNode.current = null;
    }
    const getStyles = (item) => {
        if (dragItem.current.grpI === item.grpI && dragItem.current.itemI === item.itemI) {
            return "dnd-item current"
        }
        return "dnd-item"
    }

    if (list) {
        return (                
            <div className="drag-n-drop">
            {list.map((grp, grpI) => (
              <div key={grp.title} onDragEnter={dragging && !grp.items.length?(e) => handleDragEnter(e,{grpI, itemI: 0}):null} className="dnd-group">
                {grp.items.map((item, itemI) => (
                  <div draggable key={item}  onDragStart={(e) => handletDragStart(e, {grpI, itemI})} onDragEnter={dragging?(e) => {handleDragEnter(e, {grpI, itemI})}:null} className={dragging?getStyles({grpI, itemI}):"dnd-item"}>
                    {item}
                  </div>
                ))}
              </div>
            ))}
            </div>
        )
    } else { return null}

}

export default DragNDrop;