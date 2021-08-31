import {useEffect, useState} from "react";

export const useContainerDimensions = myRef => {
    const getDimensions = () => {
        let width = null;
        let height = null;
        if (myRef.current != null) {
            width = myRef.current.offsetWidth;
            height = myRef.current.offsetHeight;
        }
        return {
            width: width,
            height: height
        }
    }

    const [dimensions, setDimensions] = useState({width: 0, height: 0})

    useEffect(() => {
        const handleResize = () => {
            setDimensions(getDimensions())
        }

        if (myRef.current) {
            setDimensions(getDimensions())
        }

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [myRef])

    return dimensions;

};
