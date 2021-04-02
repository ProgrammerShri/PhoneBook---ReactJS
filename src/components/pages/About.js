import React from "react";
import { Header, Icon } from "semantic-ui-react";

const About = () => (
  <div>
    <Header icon textAlign="center">
      <Icon name="user outline" circular />
      <Header size="huge" className="lightbulb">
        About
      </Header>
    </Header>
    <Header textAlign="center" size="small">
      This is a PhoneBook App
    </Header>
    <Header textAlign="center" size="small">
      Created By Shrikant Dewangan
    </Header>
  </div>
);

export default About;
