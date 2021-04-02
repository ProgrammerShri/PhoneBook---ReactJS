import React from "react";
import { Icon, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
const Headers = () => {
  return (
    <>
      <div style={{}}>
        <div className="ui pointing menu">
          <Header className="item" size="huge">
            Phone-Book
          </Header>
          <Link
            className="active item"
            to="/"
            // name="home"
            // active={activeItem === "home"}
            // onClick={handleItemClick}
          >
            <Icon name="home" />
          </Link>
          <Link
            className="item"
            to="/addcontact"
            // name="add"
            // active={activeItem === "add"}
            // onClick={handleItemClick}
          >
            Add Contact
          </Link>

          <Link
            className="item"
            to="/about"
            // name="about"
            // active={activeItem === "about"}
            // onClick={handleItemClick}
          >
            About
          </Link>
        </div>
      </div>
    </>
  );
};

export default Headers;
