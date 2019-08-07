import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";

interface IProps {
  add: Function;
}

const SearchBar = (props: IProps) => {
  const [searchText, setSearchText] = useState("");
  const [searchQuantity, setSearchQuantity] = useState();

  const onSubmit = (e: any) => {
    e.preventDefault();

    if (
      searchText !== "" &&
      !(searchQuantity === undefined) &&
      !isNaN(searchQuantity)
    ) {
      props.add(searchText, searchQuantity);
    }
    setSearchText("");
    setSearchQuantity("");
  };

  const onTextChange = (e: any) => {
    setSearchText(e.target.value);
  };

  const onQuantityChange = (e: any) => {
    setSearchQuantity(e.target.value);
  };

  return (
    <Form>
      <Form.Field required>
        <label>Stock ticker</label>
        <Form.Input
          value={searchText}
          onChange={onTextChange}
          placeholder="Search for any NASDAQ stock ticker"
        />
      </Form.Field>
      <Form.Field required>
        <label>Stock quantity</label>
        <Form.Input
          value={searchQuantity}
          onChange={onQuantityChange}
          placeholder="Add quantity of the chosen stock"
        />
      </Form.Field>
      <Button onClick={onSubmit} color="blue" fluid>
        Add
      </Button>
    </Form>
  );
};

export default SearchBar;
