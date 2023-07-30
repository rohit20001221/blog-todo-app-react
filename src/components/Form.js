import React, { useRef } from "react";

const Form = ({ onCreate }) => {
  const input = useRef();

  return (
    <div className="p-3 flex flex-col w-52 gap-2">
      <input ref={input} className="border-2 p-1" placeholder="#TODO item" />
      <button
        className="bg-blue-400 p-1 rounded shadow-md text-white"
        onClick={() => {
          onCreate(input.current.value);

          input.current.value = "";
        }}
      >
        add
      </button>
    </div>
  );
};

export default Form;
