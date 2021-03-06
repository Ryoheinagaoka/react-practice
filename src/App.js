import React from "react";
import ColofulMessage from "./components/ColofulMessage";

const App = () => {
  const onClickButton = () => alert();

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColofulMessage color="blue">お元気ですか？</ColofulMessage>
      <ColofulMessage color="pink" message="元気です" />
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
