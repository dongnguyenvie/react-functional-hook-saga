import React, { useState, useReducer, useEffect } from "react";
import { stateText, textReducer } from "../../reducer";
import * as TYPE from "../../constant";

const defaultCountState = 0;

export default function HookComponent(props) {
  const [count, setCount] = useState(defaultCountState);
  const [text, dispatch] = useReducer(textReducer, stateText);
  const fetchText = async data => {
    try {
      const rs = await fetch(
        `https://baconipsum.com/api/?type=all-meat&paras=${data}&start-with-lorem=1&format=array`
      );
      const payload = await rs.json();
      dispatch({
        type: TYPE.TEXT_SUCCESS,
        payload
      });
      setCount(count+1)
    } catch (error) {
      dispatch({
        type: TYPE.TEXT_ERROR,
        payload: null
      });
    }
  };
  useEffect(() => {
    console.log(`HookComponent || useEffect, render...., count = ${count}`)
  });
  return (
    <div>
      <h1>this is Hook {count}</h1>
      <hr />
      <button onClick={() => fetchText(Math.random() * 40)}>
        Fetch text from api
      </button>
      <hr />
      <div>
        {text.map((d, i) => (
          <p key={i}>{d}</p>
        ))}
      </div>
    </div>
  );
}
