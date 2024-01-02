import { useCallback, useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(1);
  const [isShow, setIsShow] = useState(true);
  const handleClick = useCallback(() => {
    console.log(count);
    if (count < 10) {
      setCount((count) => count + 1);
    }
  }, [count]);
  const handleDisplay = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isShow]);

  return { count, isShow, handleClick, handleDisplay };
};