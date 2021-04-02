import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddContact from "./components/pages/AddContact";
import EditContact from "./components/pages/EditContact";
import NotFound from "./components/pages/NotFound";
import Headers from "./components/layouts/Header";
import About from "./components/pages/About";
import Home from "./components/pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Headers />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/addcontact" component={AddContact} />
          <Route exact path="/editcontact/:id" component={EditContact} />
          <Route exact path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
