import '../Cursor/cursor.css'
import { useState, useEffect } from 'react';

const Cursor = () => {

    const [cursorPos, setCursorPos] = useState({x: 0, y: 0});

    useEffect(() => {
        const handleMouseMove = (e) => {
          setCursorPos({ x: e.clientX, y: e.clientY });
        };
      
        document.addEventListener("mousemove", handleMouseMove);
      
        return () => {
          document.removeEventListener("mousemove", handleMouseMove);
        };
      }, []);
      
    return (
            <div
            className="cursor"
            style={{ transform: `translate3d(${cursorPos.x}px, ${cursorPos.y}px, 0)` }}
            />
    );
}
 
export default Cursor;