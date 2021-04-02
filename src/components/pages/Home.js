import React, { useEffect, useState } from "react";
import { Header, Icon } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Home = () => {
  let [datas, setData] = useState([]);
  let [input, setInput] = useState("");
  let [show, setShow] = useState({ showInfo: false });

  const { id } = useParams();

  const API_URL = "http://localhost:5000/users";
  // const API_URL = "https://jsonplaceholder.typicode.com/users";

  const deleteContact = async (id) => {
    console.log(id);
    await axios.delete(`http://localhost:5000/users/${id}`);
    // await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

    fetchData();
  };

  const fetchData = async () => {
    const { data } = await axios.get(API_URL);
    setData(data.reverse());
  };

  useEffect(() => {
    fetchData();
  }, []);

  const contacts = datas.filter((i) => {
    return i.name.toLowerCase().includes(input.toLowerCase());
  });

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const onShowClick = (e) => {
    setShow({ showInfo: !show.showInfo });
  };

  const { showInfo } = show;

  return (
    <>
      <span
        className="ui icon input"
        style={{
          width: "100%",
        }}
      >
        <input
          type="text"
          placeholder="Search..."
          value={input}
          onChange={handleChange}
        />
        <i aria-hidden="true" className="search icon"></i>
      </span>
      {/* <div
        class="ui segments"
        style={{ width: "50%", height: "50px", marginLeft: "25%" }}
      >
        <div style={{ margin: "5px", padding: "5px" }}>
          <div class="ui checkbox">
            <input type="checkbox" class="hidden" readonly="" tabindex="0" />
            <label>
              Select All
              <span style={{ marginLeft: "30px" }}>
                <Icon name="delete" />
                Delete All
              </span>
            </label>
          </div>
        </div>
      </div> */}

      {contacts.map((contact, i) => {
        return (
          <>
            <div
              class="ui black segments"
              style={{ width: "50%", height: "auto", marginLeft: "25%" }}
            >
              <div class="ui black segment">
                <span>
                  <Header size="medium">
                    {/* <Checkbox /> */}
                    {contact.name}
                    <Link
                      onClick={() => {
                        deleteContact(contact.id);
                      }}
                    >
                      <Icon
                        name="delete"
                        size="large"
                        style={{ float: "right" }}
                      />
                    </Link>
                    <Link to={`/editcontact/${contact.id}`}>
                      <Icon
                        name="edit"
                        size="large"
                        style={{ float: "right" }}
                      />
                    </Link>
                    <Icon
                      name="caret down"
                      style={{ float: "right" }}
                      onClick={onShowClick}
                    />
                  </Header>
                </span>
              </div>
              {showInfo ? (
                <div class="ui segments" style={{ height: "auto" }}>
                  <div class="ui segment">Email : {contact.email} </div>
                  <div class="ui segment">Mobile : {contact.phone}</div>
                </div>
              ) : null}
            </div>
          </>
        );
      })}
    </>
  );
};

export default Home;
