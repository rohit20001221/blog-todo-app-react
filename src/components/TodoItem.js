import React from "react";
import CheckBox from "./CheckBox";
import CheckBoxChecked from "./CheckBoxChecked";
import Delete from "./Delete";

const TodoItem = ({ title, isCompleted, onComplete, onDelete }) => {
  return (
    <div className="inline-flex flex-wrap gap-2 border p-4">
      <div onClick={onComplete}>
        {isCompleted ? <CheckBoxChecked /> : <CheckBox />}
      </div>
      <div className="font-semibold">{title}</div>
      <div onClick={onDelete}>
        <Delete />
      </div>
    </div>
  );
};

export default TodoItem;
