import { useState } from "react";
import TodoItem from "./components/TodoItem";
import Form from "./components/Form";

function App() {
  const [items, setItems] = useState([]);

  const addItem = (title) => {
    setItems((items) => [...items, { title, isCompleted: false }]);
  };

  const deleteItem = (id) => {
    setItems((items) => items.filter((_, index) => index !== id));
  };

  const updateItem = (id, status) => {
    setItems((items) => {
      return items.map((item, index) => {
        if (id !== index) {
          return item;
        }

        return {
          ...item,
          isCompleted: status,
        };
      });
    });
  };

  return (
    <div className="flex flex-col items-center pt-10 gap-10">
      <Form onCreate={(title) => addItem(title)} />
      <div className="flex flex-col items-center gap-4">
        {items.map((item, index) => (
          <TodoItem
            key={index}
            title={item.title}
            isCompleted={item.isCompleted}
            onComplete={() => {
              updateItem(index, !item.isCompleted);
            }}
            onDelete={() => deleteItem(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
