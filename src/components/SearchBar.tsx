import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";

const SearchBar = (props: any) => {
  const [searchText, setSearchText] = useState("");

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (searchText !== "") {
      props.search(searchText);
      setSearchText("");
    }
  };

  const onChange = (e: any) => {
    setSearchText(e.target.value);
  };

  return (
    <Form>
      <Form.Field>
        <input
          value={searchText}
          onChange={onChange}
          placeholder="Search for any stock ticker"
        />
      </Form.Field>
      <Button onClick={onSubmit} color="blue" floated="right">
        Add
      </Button>
    </Form>
  );
};

export default SearchBar;
