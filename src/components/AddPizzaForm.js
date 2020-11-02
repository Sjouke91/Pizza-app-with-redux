// src/components/AddPizzaForm.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function AddPizzaForm() {
  const dispatch = useDispatch();
  const [name, set_name] = useState("");
  const [url, set_url] = useState("");
  const [description, set_description] = useState("");
  const randomId = Math.floor(Math.random() * 100 + 1);

  const submit = (event) => {
    // to make sure that the form does not redirect (which is normal browser behavior)
    event.preventDefault();
    console.log("this is url", url);
    dispatch({
      type: "ADD_PIZZA",
      payload: {
        id: randomId,
        name: name,
        description: description,
        url: url,
      },
    });
    set_name("");
    set_description("");
    set_url("");
  };

  return (
    <div>
      <form onSubmit={submit}>
        <h2>Add a new pizza</h2>
        <p>
          <label>
            Name:{" "}
            <input
              type="text"
              value={name}
              onChange={(e) => set_name(e.target.value)}
            />
          </label>
        </p>
        <p>
          <label>
            Description:{" "}
            <input
              type="text"
              value={description}
              onChange={(e) => set_description(e.target.value)}
            />
          </label>
          <label>
            imageurl:{" "}
            <input
              type="text"
              value={url}
              onChange={(e) => set_url(e.target.value)}
            />
          </label>
        </p>
        <p>
          <button type="submit">Add this pizza!</button>
        </p>
      </form>
    </div>
  );
}
