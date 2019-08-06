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
      console.log("this would be submitted");
      props.add(searchText, searchQuantity);
      setSearchText("");
      setSearchQuantity(undefined);
    }
  };

  const onTextChange = (e: any) => {
    setSearchText(e.target.value);
  };

  const onQuantityChange = (e: any) => {
    setSearchQuantity(e.target.value);
  };

  return (
    <Form>
      <Form.Input
        onChange={onTextChange}
        placeholder="Search for any NASDAQ stock ticker"
      />
      <Form.Input
        onChange={onQuantityChange}
        placeholder="Add quantity of the chosen stock"
      />
      <Button onClick={onSubmit} color="blue">
        Add
      </Button>
    </Form>
  );
};

export default SearchBar;
