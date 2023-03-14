import React from "react";

export default function OptionSelection({ arrayItems, selectOption }) {
  return (
    <>
      <h1 className="heading">ChatGPT App</h1>
      <div className="grid-main">
        {arrayItems.map((item,i) => {
          return (
            <div
            key={i}
              className="grid-child"
              onClick={() => selectOption(item.option)}
            >
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
