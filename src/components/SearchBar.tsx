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
        <Form.Input
          value={searchText}
          onChange={onChange}
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
