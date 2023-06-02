import React, { useEffect, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const AddCustomer = () => {
  let navigation = useNavigate();

  const [initialValues, setinitialValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    city: "",
    state: "",
    country: "",
    postalCode: "",
  });

  const [customerList, setCustomerList] = useState([]);
  const [id, setId] = useState("");

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phoneNumber: Yup.string().required("Phone Number is required"),
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    country: Yup.string().required("Country is required"),
    postalCode: Yup.string().required("Postal Code is required"),
  });

  //This function used to add or edit customer data
  const handleSubmit = (values: any) => {
    if (id) {
      let newCustomer = customerList?.map((item: any) => {
        if (id == item.id) {
          return {
            ...values,
            id: item.id,
          };
        } else {
          return item;
        }
      });

      navigation("/");

      localStorage.setItem("customers", JSON.stringify(newCustomer));
    } else {
      let newCustomer = {
        ...values,
        id: customerList.length + 1,
      };

      localStorage.setItem(
        "customers",
        JSON.stringify([newCustomer, ...customerList])
      );

      navigation("/");
    }
  };

  //This function used to navigate customer page
  const goBack = () => {
    localStorage.setItem("singleId", "");
    setId("");
    setinitialValues({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      address: "",
      city: "",
      state: "",
      country: "",
      postalCode: "",
    });
    navigation("/");
  };

  useEffect(() => {
    let customers = localStorage.getItem("customers");
    let singleId = localStorage.getItem("singleId");
    let parseCustomer = customers && JSON.parse(customers);
    setCustomerList(parseCustomer);
    if (singleId) {
      setId(singleId);
      let findlist = parseCustomer?.find((item: any) => item.id == singleId);
      setinitialValues(findlist);
    } else {
      setId("");
      setinitialValues({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        address: "",
        city: "",
        state: "",
        country: "",
        postalCode: "",
      });
    }
  }, []);

  return (
    <>
      <div className="container mt-4">
        <div className=" d-flex justify-content-between align-items-center w-100 ">
          <h5>{id ? "Edit Costomer" : "Add Costomer"}</h5>
          {id && (
            <button
              onClick={() => goBack()}
              type="button"
              className="btn btn-primary"
            >
              Back
            </button>
          )}
        </div>
        <Formik
          enableReinitialize={true}
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <div className="row pb-3">
                <Form.Group controlId="firstName" className="col-6">
                  <Form.Label>First Name</Form.Label>
                  <Field
                    type="text"
                    name="firstName"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="text-danger"
                  />
                </Form.Group>
                <Form.Group controlId="lastName" className="col-6">
                  <Form.Label>Last Name</Form.Label>
                  <Field type="text" name="lastName" className="form-control" />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="text-danger"
                  />
                </Form.Group>
              </div>
              <div className="row pb-3">
                <Form.Group controlId="email" className="col-6">
                  <Form.Label>Email</Form.Label>
                  <Field type="email" name="email" className="form-control" />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-danger"
                  />
                </Form.Group>
                <Form.Group controlId="phoneNumber" className="col-6">
                  <Form.Label>Phone Number</Form.Label>
                  <Field
                    type="text"
                    name="phoneNumber"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="phoneNumber"
                    component="div"
                    className="text-danger"
                  />
                </Form.Group>
              </div>
              <div className="row pb-3">
                <Form.Group controlId="address" className="col-6">
                  <Form.Label>Address</Form.Label>
                  <Field type="text" name="address" className="form-control" />
                  <ErrorMessage
                    name="address"
                    component="div"
                    className="text-danger"
                  />
                </Form.Group>
                <Form.Group controlId="city" className="col-6">
                  <Form.Label>City</Form.Label>
                  <Field type="text" name="city" className="form-control" />
                  <ErrorMessage
                    name="city"
                    component="div"
                    className="text-danger"
                  />
                </Form.Group>
              </div>
              <div className="row pb-3">
                <Form.Group controlId="state" className="col-6">
                  <Form.Label>State</Form.Label>
                  <Field type="text" name="state" className="form-control" />
                  <ErrorMessage
                    name="state"
                    component="div"
                    className="text-danger"
                  />
                </Form.Group>
                <Form.Group controlId="country" className="col-6">
                  <Form.Label>Country</Form.Label>
                  <Field type="text" name="country" className="form-control" />
                  <ErrorMessage
                    name="country"
                    component="div"
                    className="text-danger"
                  />
                </Form.Group>
              </div>
              <div className="row pb-3">
                <Form.Group controlId="postalCode" className="col-6">
                  <Form.Label>Postal Code</Form.Label>
                  <Field
                    type="text"
                    name="postalCode"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="postalCode"
                    component="div"
                    className="text-danger"
                  />
                </Form.Group>
              </div>
              <Button type="submit" variant="primary">
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default AddCustomer;
