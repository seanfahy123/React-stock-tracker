import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";

const SearchBar = (props: any) => {
  const [searchText, setSearchText] = useState("");

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (searchText !== "") {
      props.add(searchText);

      setSearchText("");
    }
  };

  const onTextChange = (e: any) => {
    setSearchText(e.target.value);
  };

  return (
    <Form>
      <Form.Field>
        <Form.Input
          value={searchText}
          onChange={onTextChange}
          placeholder="Search for any NASDAQ stock ticker"
        />
        <Button onClick={onSubmit} color="blue" floated="right">
          Add
        </Button>
      </Form.Field>
    </Form>
  );
};

export default SearchBar;
