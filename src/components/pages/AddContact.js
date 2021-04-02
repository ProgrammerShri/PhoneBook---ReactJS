import React, { useState } from "react";
import { Button, Form, Grid, Header, Icon, Segment } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const AddContact = () => {
  let history = useHistory();
  const [users, setUsers] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/users", users);
    // await axios.post(
    //   " https://jsonplaceholder.typicode.com/users",
    //   users
    // );

    history.push("/");
  };

  const onInputChange = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const { name, email, phone } = users;
  return (
    <>
      <Grid
        textAlign="center"
        style={{ height: "70vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            Add Contact
          </Header>
          <Form size="large">
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Enter Name..."
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
              <Form.Input
                fluid
                icon="mail"
                iconPosition="left"
                placeholder="Enter Email..."
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
              <Form.Input
                fluid
                icon="mobile alternate"
                iconPosition="left"
                placeholder="Enter Mobile..."
                name="phone"
                value={phone}
                onChange={(e) => onInputChange(e)}
              />

              <Button color="teal" fluid size="large" onClick={onSubmit}>
                <Icon name="plus" />
                Add
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default AddContact;
