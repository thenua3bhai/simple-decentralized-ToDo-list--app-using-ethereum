import { useState } from "react"; //In custom hook no use of React import see useToggle.js file

function useInputState(initialVal) {
  const [state, setState] = useState(initialVal);
  const updateValuee = (e) => {
    setState(e.target.value);
  };
  const reset = () => {
    setState("");
  };

  const valuee = state;
  return [valuee, updateValuee, reset]; //returning array of value OR references, we will grap these bu array destructring
}

export default useInputState;
