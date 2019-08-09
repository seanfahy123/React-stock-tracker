import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

interface IProps {
  add: Function;
}

const SearchBar = (props: IProps) => {
  return (
    <Formik
      initialValues={{ ticker: "", quantity: "" }}
      validate={values => {
        let errors: any = {};
        if (!values.ticker) {
          errors.ticker = "Required";
        } else if (!/^[A-Za-z]+$/.test(values.ticker)) {
          errors.ticker =
            "Invalid stock ticker, must be made solely of letters";
        }
        if (!values.quantity) {
          errors.quantity = "Required";
        } else if (!/^[0-9]*$/.test(values.quantity)) {
          errors.quantity = "Invalid stock quantity, must be a number";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          props.add(values.ticker, values.quantity);
          setSubmitting(false);
          resetForm();
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field
            placeholder="Add a NASDAQ stock ticker"
            className="inputField"
            name="ticker"
          />
          <ErrorMessage name="ticker" component="div" />
          <Field
            placeholder="Add quantity of the chosen stock"
            className="inputField"
            name="quantity"
          />
          <ErrorMessage name="quantity" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Add
          </button>
        </Form>
      )}
    </Formik>
    // <Form>
    //   <Form.Field required>
    //     <label>Stock ticker</label>
    //     <TextBar ref={textInputRef} />
    //   </Form.Field>
    //   <Form.Field required>
    //     <label>Stock quantity</label>
    //     <Form.Input placeholder="Add quantity of the chosen stock" />
    //   </Form.Field>
    //   <Button onClick={onSubmit} color="blue" fluid>
    //     Add
    //   </Button>
    // </Form>
  );
};

export default SearchBar;
