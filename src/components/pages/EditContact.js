import React, { useEffect, useState } from "react";
import { Button, Form, Grid, Header, Icon, Segment } from "semantic-ui-react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

const EditContact = () => {
  let history = useHistory();
  let { id } = useParams();
  const [users, setUsers] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const { name, email, phone } = users;

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:5000/users/${id}`);
    // const result = await axios.get(
    //   `https://jsonplaceholder.typicode.com/users/${id}`
    // );

    setUsers(result.data);
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/users/${id}`, users);
    // await axios.put(
    //   `https://jsonplaceholder.typicode.com/users/${id}`,
    //   users
    // );

    history.push("/");
  };

  const onInputChange = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Grid
        textAlign="center"
        style={{ height: "70vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            Update Contact
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
                <Icon name="edit" />
                Update
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default EditContact;
