import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./PizzaList.scss";

const selectUser = (reduxState) => {
  return reduxState.user;
};

function compare_score(a, b) {
  return b.bought - a.bought;
}

const selectPizzas = (reduxState) => {
  return [...reduxState.pizzas].sort(compare_score);
};

export default function PizzaList() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const listOfPizzas = useSelector(selectPizzas);
  console.log(listOfPizzas);

  return (
    <div>
      <h1>Pizza Explorer</h1>
      <p>
        Welcome back, <strong>{user.name}</strong>! Your favorite pizzas:{" "}
      </p>
      <div className="parent">
        <ul>
          {listOfPizzas.map((pizza) => {
            const toggle = () => {
              dispatch({
                type: "TOGGLE_FAVORITE_PIZZA",
                payload: pizza.id,
              });
            };
            return (
              <div className="pizzaCard">
                <li key={pizza.id}>
                  name: {pizza.name} description: {pizza.description} times
                  bought: {pizza.bought}
                </li>
                <img src={pizza.url} alt="pizza"></img>
                <button onClick={toggle}>
                  {user.favorites.includes(pizza.id) ? "♥" : "♡"}
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
