import { Fragment, useState, useEffect, useContext } from 'react';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

const useElementSize = (elementRef) => {
  const [elementSize, setElementSize] = useState({
    width: undefined,
    height: undefined,
  });

  const handleResize = () => {
    setElementSize({
      width: elementRef.current.offsetWidth,
      height: elementRef.current.offsetHeight,
    });
  };

  useEffect(() => {
    if (elementRef.current === undefined) {
      return;
    }
    setElementSize({
      width: elementRef.current.offsetWidth,
      height: elementRef.current.offsetHeight,
    });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [elementRef.current]);

  return elementSize;
};

export { useWindowSize, useElementSize };
