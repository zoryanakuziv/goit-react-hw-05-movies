import React, { useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Input, Form, Button } from "./Searchbar.styled";

export default function Searchbar({ onSubmit }) {
  const [inputValue, setInputValue] = useState("");

  const handleInput = (event) => {
    setInputValue(event.target.value.toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() === "") {
      toast.error("Insert smth");
      return;
    }
    onSubmit(inputValue);
    setInputValue("");
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={inputValue}
          onChange={handleInput}
        />
        <Button type="submit">Search</Button>
      </Form>
    </div>
  );
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
