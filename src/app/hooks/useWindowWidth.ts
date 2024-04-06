import { useState, useEffect } from "react";

export default function useWindowWidth() {
    const [width, setWidth] = useState(() => {
        if (typeof window !== 'undefined') {
            return window.innerWidth;
        }
        return 0; // Or any default value you prefer
    });
  
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        if (typeof window !== 'undefined') {
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);
  
    return width;
}
