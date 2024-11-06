// App.js
import React from "react";

const people = [
  {
    id: 1,
    name: "Joao",
    idade: 23,
  },
  {
    id: 2,
    name: "Maria",
    idade: 32,
  },
];

const List = () => {
  return (
    <>
      {people.map((person) => (
        <div>{person.name}</div>
      ))}
    </>
  );
};

export default List;
