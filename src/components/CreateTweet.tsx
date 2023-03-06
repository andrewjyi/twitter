import { useState } from "react";

export const CreateTweet = () => {
  const [text, setText] = useState("");

  const mutation = '';

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form>
      <textarea
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></textarea>
      <div>
        <button type="submit">Tweet</button>
      </div>
    </form>
  );
};
