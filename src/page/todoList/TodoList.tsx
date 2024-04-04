import React, { useState } from "react";
import "./todoList.scss";
import TodoItem from "./TodoItem";

export interface TodoItemType {
  type: string;
  name: string;
}

const TodoList = () => {
  const [fruitList, setFruitList] = useState<TodoItemType[]>([]);
  const [vegetableList, setVegetableList] = useState<TodoItemType[]>([]);
  const [todoItems, setTodoItems] = useState<TodoItemType[]>([
    {
      type: "Fruit",
      name: "Apple",
    },
    {
      type: "Vegetable",
      name: "Broccoli",
    },
    {
      type: "Vegetable",
      name: "Mushroom",
    },
    {
      type: "Fruit",
      name: "Banana",
    },
    {
      type: "Vegetable",
      name: "Tomato",
    },
    {
      type: "Fruit",
      name: "Orange",
    },
    {
      type: "Fruit",
      name: "Mango",
    },
    {
      type: "Fruit",
      name: "Pineapple",
    },
    {
      type: "Vegetable",
      name: "Cucumber",
    },
    {
      type: "Fruit",
      name: "Watermelon",
    },
    {
      type: "Vegetable",
      name: "Carrot",
    },
  ]);

  const onItemInItemListClick = (item: TodoItemType) => {
    setTodoItems((prev) => prev.filter((el) => el.name !== item.name));
    switch (item.type) {
      case "Vegetable": {
        setVegetableList((prev) => prev.concat(item));
        break;
      }
      case "Fruit": {
        setFruitList((prev) => prev.concat(item));
        break;
      }
      default:
        break;
    }
  };

  const onTimeOutCallback = (item: TodoItemType) => {
    switch (item.type) {
      case "Vegetable": {
        console.log(
          item.name,
          vegetableList,
          vegetableList.filter((el) => el.name !== item.name)
        );

        setVegetableList((prev) => prev.filter((el) => el.name !== item.name));
        break;
      }
      case "Fruit": {
        setFruitList((prev) => {

          return prev.filter((el) => el.name !== item.name);
        });
        break;
      }
      default:
        break;
    }
    setTodoItems((prev) => prev.concat(item));
  };

  return (
    <div className="todo-list-container">
      <div className="item-list-section">
        {todoItems.map((el) => (
          <TodoItem
            item={el}
            onClick={() => {
              onItemInItemListClick(el);
            }}
          />
        ))}
      </div>
      <div className="todo-box-area">
        <div className="header">Fruit</div>
        <div className="todo-box-body">
          {fruitList.map((el) => (
            <TodoItem
              key={el.name}
              item={el}
              timer={5}
              onClick={() => {
                onTimeOutCallback(el);
              }}
              timeOutCallback={() => {
                onTimeOutCallback(el);
              }}
            />
          ))}
        </div>
      </div>
      <div className="todo-box-area">
        <div className="header">Vegetable</div>
        <div className="todo-box-body">
          {vegetableList.map((el) => (
            <TodoItem
              key={el.name}
              item={el}
              timer={5}
              timeOutCallback={() => {
                onTimeOutCallback(el);
              }}
              onClick={() => {
                onTimeOutCallback(el);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
