import { useState } from "react";

// modifique el componente con hooks para acceder directamente a la variable likes
function Like() {
  const [likes, setLikes] = useState(0);

  const handleIncrement = () => {
    setLikes(likes + 1);
  };

  const handleDecrement = () => {
    setLikes(likes - 1);
  };

  return (
    <div>
      <p>Likes: {likes}</p>
      <button id="increment" onClick={handleIncrement}>
        Like
      </button>
      <button id="decrement" onClick={handleDecrement}>
        Dislike
      </button>
    </div>
  );
}

export default Like;
