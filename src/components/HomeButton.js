import { useHistory } from "react-router-dom";
import React from 'react';

function HomeButton() {
  const history = useHistory();

  function handleClick() {
    history.push("/chat");
  }

  return (
    <button type="button" onClick={handleClick}>
      Go home
    </button>
  );
}

export default HomeButton;