import { useState } from 'react';

function useToggle(initialState = false) {
  const [state, setState] = useState(initialState || false);

  const toggle = isOpen => {
    if (typeof isOpen === 'boolean') {
      setState(isOpen);
    } else {
      setState(!state);
    }
  };

  return [state, toggle];
}

export default useToggle;
