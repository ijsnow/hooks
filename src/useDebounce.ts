import { useState, useEffect } from "react";
import useTimeout from "./useTimeout";

export default function useDebounce<V extends any>(value: V, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  const timeout = useTimeout();

  useEffect(() => {
    timeout.set(() => {
      setDebouncedValue(value);
    }, delay);
  }, [value, delay]);

  return debouncedValue;
}
