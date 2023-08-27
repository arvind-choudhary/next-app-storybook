import { useState } from 'react';

export const useBoolean = (
  initialValue: boolean,
): [boolean, () => void, () => void] => {
  const [value, setBooleanState] = useState(initialValue);
  const setTrue = () => setBooleanState(true);
  const setFalse = () => setBooleanState(false);

  return [value, setTrue, setFalse];
};
