import React, { useEffect, useState } from "react";
import { TodoItemType } from "./TodoList";

interface TodoItemProps {
  item: TodoItemType;
  timeOutCallback?: () => void;
  timer?: number;
  onClick?: () => void;
}

const TodoItem = (props: TodoItemProps) => {
  const { item } = props;
  const [counter, setCounter] = useState<number | undefined>(props.timer);


  useEffect(() => {
    if(counter !== undefined){
        if ( counter > 0) {
            setTimeout(() => {
              setCounter((prev) => prev && prev - 1);
            }, 1000);
          } else if (counter <= 0 && props.timeOutCallback) {
            props.timeOutCallback();
          }
    }
   
  }, [counter]);

  return (
    <div className="todo-item" onClick={props.onClick}>
      {item.name} 
    </div>
  );
};

export default TodoItem;
